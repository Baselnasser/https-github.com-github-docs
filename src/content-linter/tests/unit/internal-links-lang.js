import { jest } from '@jest/globals'
import markdownlint from 'markdownlint'

import { internalLinksLang } from '../../lib/linting-rules/internal-links-lang.js'
import { testOptions } from '../../lib/default-markdownlint-options.js'

const fixtureFile = 'src/content-linter/tests/fixtures/internal-links-lang.md'

jest.setTimeout(30 * 1000)
const options = testOptions('MD114', internalLinksLang, fixtureFile)

const result = await markdownlint.promises.markdownlint(options)
test('internal links and hardcoded language codes', () => {
  const errors = result[fixtureFile]
  expect(Object.keys(result).length).toBe(1)
  expect(errors.length).toBe(3)
  expect(errors.map((error) => error.lineNumber)).toEqual([3, 4, 8])
})
