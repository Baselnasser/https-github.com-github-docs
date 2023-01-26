#!/usr/bin/env node

// [start-readme]
//
// This script is run automatically via GitHub Actions on every push to `main` to generate searchable data.
// It can also be run manually. For more info see [contributing/search.md](contributing/search.md)
//
// [end-readme]

import assert from 'assert'
import { program, Option } from 'commander'

import { languageKeys } from '../../lib/languages.js'
import { allVersions } from '../../lib/all-versions.js'
import searchSync from './sync.js'

const shortNames = Object.fromEntries(
  Object.values(allVersions).map((info) => {
    const shortName = info.hasNumberedReleases
      ? info.miscBaseName + info.currentRelease
      : info.miscBaseName
    return [shortName, info]
  })
)

const allVersionKeys = [...Object.keys(shortNames), ...Object.keys(allVersions)]

program
  .description('Creates search records by scraping')
  .option('-v, --verbose', 'Verbose outputs')
  .addOption(new Option('-V, --version <VERSION>', 'Specific versions').choices(allVersionKeys))
  .addOption(
    new Option('-l, --language <LANGUAGE>', 'Which languages to focus on').choices(languageKeys)
  )
  .addOption(
    new Option('--not-language <LANGUAGE>', 'Specific language to omit').choices(languageKeys)
  )
  .option('--no-markers', 'Do not print a marker for each parsed document')
  .option('--filter <MATCH>', 'Filter to only do pages that match this string')
  .argument('<out-directory>', 'where the indexable files should be written')
  .parse(process.argv)

main(program.opts(), program.args)

async function main(opts, args) {
  let language
  if ('language' in opts) {
    language = opts.language
    if (process.env.LANGUAGE) {
      console.warn(
        `'language' specified as argument ('${language}') AND environment variable ('${process.env.LANGUAGE}')`
      )
    }
  } else {
    if (process.env.LANGUAGE && process.env.LANGUAGE !== 'all') {
      language = process.env.LANGUAGE
      if (!languageKeys.includes(language)) {
        throw new Error(
          `Environment variable 'VERSION' (${language}) is not recognized. Must be one of ${languageKeys}`
        )
      }
    }
  }
  const notLanguage = opts.notLanguage
  if (notLanguage && language) {
    throw new Error("Can't specify --language *and* --not-language")
  }

  let version
  if ('version' in opts) {
    version = opts.version
    if (process.env.VERSION) {
      console.warn(
        `'version' specified as argument ('${version}') AND environment variable ('${process.env.VERSION}')`
      )
    }
  } else {
    if (process.env.VERSION && process.env.VERSION !== 'all') {
      version = process.env.VERSION
      if (!allVersionKeys.includes(version)) {
        throw new Error(
          `Environment variable 'VERSION' (${version}) is not recognized. Must be one of ${allVersionKeys}`
        )
      }
    }
  }

  // A `--version` or `process.env.VERSION` was specified, we need to convert
  // it to the long name. I.e. `free-pro-team@latest`. Not `dotcom`.
  // But it could also have beeb specified as `all` which means that `version`
  // here ill be `undefined` which is also OK.
  // const indexVersion = shortNames[version].hasNumberedReleases
  //   ? shortNames[version].currentRelease
  //   : shortNames[version].miscBaseName

  let indexVersion
  if (version && version !== 'all') {
    // If it has been specified, it needs to be in the "long-form".
    // I.e. `enterprise-server@3.5` not `ghes-3.5`.
    indexVersion = version in shortNames ? shortNames[version].version : version
  }
  assert(
    !indexVersion || indexVersion in allVersions,
    `version must be undefined or one of ${Object.keys(allVersions)}`
  )

  const [outDirectory] = args

  const config = {
    noMarkers: !opts.markers,
    filter: opts.filter,
  }

  const options = {
    language,
    notLanguage,
    version: indexVersion,
    outDirectory,
    config,
  }
  await searchSync(options)
}
