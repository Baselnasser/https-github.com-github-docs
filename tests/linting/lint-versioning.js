import { jest } from '@jest/globals'
import fs from 'fs/promises'
import Ajv from 'ajv'
import addErrors from 'ajv-errors'
import semver from 'semver'
import { allVersions, allVersionShortnames } from '../../lib/all-versions.js'
import { supported, next, nextNext, deprecated } from '../../lib/enterprise-server-releases.js'
import { getLiquidConditionals } from '../../script/helpers/get-liquid-conditionals.js'
import allowedVersionOperators from '../../lib/liquid-tags/ifversion-supported-operators.js'
import featureVersionsSchema from '../helpers/schemas/feature-versions-schema.js'
import walkFiles from '../../script/helpers/walk-files'
import { getDeepDataByLanguage } from '../../lib/get-data.js'
import { formatAjvErrors } from '../helpers/schemas.js'

/*
  NOTE: This test suite does NOT validate the `versions` frontmatter in content files.
  That's because lib/page.js validates frontmatter when loading all the pages (which happens
  when running npm start or tests) and throws an error immediately if there are any issues.
  This test suite DOES validate the data/features `versions` according to the same FM schema.
  Some tests/unit/page.js tests also exercise the frontmatter validation.
*/

jest.useFakeTimers({ legacyFakeTimers: true })

const featureVersions = Object.entries(getDeepDataByLanguage('features', 'en'))
const featureVersionNames = featureVersions.map((fv) => fv[0])
const allowedVersionNames = Object.keys(allVersionShortnames).concat(featureVersionNames)

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true })
addErrors(ajv)
// *** TODO: We can drop this override once the frontmatter schema has been updated to work with AJV. ***
ajv.addFormat('semver', {
  validate: (x) => semver.validRange(x),
})
// *** End TODO ***
const validate = ajv.compile(featureVersionsSchema)

// Make sure data/features/*.yml contains valid versioning.
describe('lint feature versions', () => {
  test.each(featureVersions)('data/features/%s matches the schema', (name, featureVersion) => {
    const valid = validate(featureVersion)
    let errors

    if (!valid) {
      errors = formatAjvErrors(validate.errors)
    }

    expect(valid, errors).toBe(true)
  })
})

const allFiles = walkFiles('content', '.md').concat(walkFiles('data', ['.yml', '.md']))

// Quoted strings in Liquid, like {% if "foo" %}, will always evaluate true _because_ they are strings.
// Instead we need to use unquoted variables, like {% if foo %}.
const stringInLiquidRegex = /{% (?:if|ifversion|elseif|unless) (?:"|').+?%}/g

// Make sure the `if` and `ifversion` Liquid tags in content and data files are valid.
describe('lint Liquid versioning', () => {
  describe.each(allFiles)('%s', (file) => {
    let fileContents, ifversionConditionals, ifConditionals

    beforeAll(async () => {
      fileContents = await fs.readFile(file, 'utf8')
      ifversionConditionals = getLiquidConditionals(fileContents, ['ifversion', 'elsif'])
      ifConditionals = getLiquidConditionals(fileContents, 'if')
    })

    // `ifversion` supports both standard and feature-based versioning.
    test('ifversion conditionals are valid', async () => {
      const errors = validateIfversionConditionals(ifversionConditionals)
      expect(errors.length, errors.join('\n')).toBe(0)
    })

    // Now that `ifversion` supports feature-based versioning, we should have few other `if` tags.
    test('ifversion, not if, is used for versioning', async () => {
      const ifsForVersioning = ifConditionals.filter((cond) =>
        allowedVersionNames.some((keyword) => cond.includes(keyword))
      )
      const errorMessage = `Found ${
        ifsForVersioning.length
      } "if" conditionals used for versioning! Use "ifversion" instead.
    ${ifsForVersioning.join('\n')}`
      expect(ifsForVersioning.length, errorMessage).toBe(0)
    })

    test('does not contain Liquid that evaluates strings (because they are always true)', async () => {
      const matches = fileContents.match(stringInLiquidRegex) || []
      const message =
        'Found Liquid conditionals that evaluate a string instead of a variable. Remove the quotes around the variable!'
      const errorMessage = `${message}\n  - ${matches.join('\n  - ')}`
      expect(matches.length, errorMessage).toBe(0)
    })
  })
})

// Return true if the shortname in the conditional is supported (fpt, ghec, ghes, ghae, all feature names).
function validateVersion(version) {
  return allowedVersionNames.includes(version)
}

function validateIfversionConditionals(conds) {
  const errors = []

  conds.forEach((cond) => {
    // Where `cond` is an array of strings, where each string may have one of the following space-separated formats:
    // * Length 1: `<version>` (example: `fpt`)
    // * Length 2: `not <version>` (example: `not ghae`)
    // * Length 3: `<version> <operator> <release>` (example: `ghes > 3.0`)
    //
    // Note that Lengths 1 and 2 may be used with feature-based versioning, but NOT Length 3.
    const condParts = cond.split(/ (or|and) /).filter((part) => !(part === 'or' || part === 'and'))

    condParts.forEach((str) => {
      const strParts = str.split(' ')
      // if length = 1, this should be a valid short version or feature version name.
      if (strParts.length === 1) {
        const version = strParts[0]
        const isValidVersion = validateVersion(version)
        if (!isValidVersion) {
          errors.push(`"${version}" is not a valid short version or feature version name`)
        }
      }

      // if length = 2, this should be 'not' followed by a valid short version name.
      if (strParts.length === 2) {
        const [notKeyword, version] = strParts
        const isValidVersion = validateVersion(version)
        const isValid = notKeyword === 'not' && isValidVersion
        if (!isValid) {
          errors.push(`"${cond}" is not a valid conditional`)
        }
      }

      // if length = 3, this should be a range in the format: ghes > 3.0
      // where the first item is `ghes` (currently the only version with numbered releases),
      // the second item is a supported operator, and the third is a supported GHES release.
      if (strParts.length === 3) {
        const [version, operator, release] = strParts
        const hasSemanticVersioning = Object.values(allVersions).some(
          (v) => (v.hasNumberedReleases || v.internalLatestRelease) && v.shortName === version
        )
        if (!hasSemanticVersioning) {
          errors.push(
            `Found "${version}" inside "${cond}" with a "${operator}" operator, but "${version}" does not support semantic comparisons"`
          )
        }
        if (!allowedVersionOperators.includes(operator)) {
          errors.push(
            `Found a "${operator}" operator inside "${cond}", but "${operator}" is not supported`
          )
        }
        // Check that the versions in conditionals are supported
        // versions of GHES or the first deprecated version. Allowing
        // the first deprecated version to exist in code ensures
        // allows us to deprecate the version before removing
        // the old liquid content.
        if (
          !(
            supported.includes(release) ||
            release === next ||
            release === nextNext ||
            deprecated[0] === release
          )
        ) {
          errors.push(
            `Found ${release} inside "${cond}", but ${release} is not a supported GHES release`
          )
        }
      }
    })
  })

  return errors
}
