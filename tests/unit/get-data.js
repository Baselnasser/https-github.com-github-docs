import fs from 'fs'
import path from 'path'

import { expect, test, describe, beforeAll, afterAll } from '@jest/globals'

import languages from '../../lib/languages.js'
import { getDataByLanguage, getDeepDataByLanguage, getUIDataMerged } from '../../lib/get-data.js'
import { DataDirectory } from '../helpers/data-directory.js'

describe('get-data', () => {
  let dd
  const enDirBefore = languages.en.dir
  const jaDirBefore = languages.ja.dir

  beforeAll(() => {
    const dd = new DataDirectory({
      data: {
        ui: {
          key: 'Value',
          deep: {
            er: 'Depth',
            est: 'Deepest',
          },
        },
        variables: {
          stuff: {
            foo: 'Foo',
            bar: 'Bar',
          },
        },
        reusables: {
          coolness: 'This is *Markdown*',
          otherness: '**Also** Markdown',
        },
      },
    })
    languages.en.dir = dd.root

    const jaTranslationsRoot = path.join(dd.root, 'translations', 'ja-JP')
    fs.mkdirSync(jaTranslationsRoot, { recursive: true })
    languages.ja.dir = jaTranslationsRoot
    new DataDirectory( // eslint-disable-line no-new
      {
        data: {
          ui: {
            key: '価値',
            deep: {
              er: '深さ',
            },
          },
          variables: {
            stuff: {
              foo: 'フー',
            },
          },
          reusables: {
            coolness: 'これがマークダウンです',
          },
        },
      },
      jaTranslationsRoot
    )
  })

  afterAll(() => {
    if (dd) dd.destroy()
    languages.en.dir = enDirBefore
    languages.ja.dir = jaDirBefore
  })

  test('getDataByLanguage variables English', () => {
    // The most basic test
    {
      const result = getDataByLanguage('variables.stuff.foo', 'en')
      expect(result).toBe('Foo')
    }
    // Test that memoization doesn't go wrong
    {
      const result = getDataByLanguage('variables.stuff.bar', 'en')
      expect(result).toBe('Bar')
    }
    // Test that unrecognized keys just return `undefined`
    {
      const result = getDataByLanguage('variables.stuff.neverheardof', 'en')
      expect(result).toBeUndefined()
    }
  })

  test('getDataByLanguage variables with non-English', () => {
    // The most basic test
    {
      const result = getDataByLanguage('variables.stuff.foo', 'ja')
      expect(result).toBe('フー')
    }
    // Test fallback to English if not present in translation
    {
      const result = getDataByLanguage('variables.stuff.bar', 'ja')
      expect(result).toBe('Bar')
    }
    // Test that unrecognized keys just return `undefined`
    {
      const result = getDataByLanguage('variables.stuff.neverheardof', 'ja')
      expect(result).toBeUndefined()
    }
  })

  test('getDataByLanguage variables failures', () => {
    // The most basic test
    {
      const result = getDataByLanguage('variables.stuff.key_non_existent', 'en')
      expect(result).toBeUndefined()
    }
    // Test fallback to English if not present in translation
    {
      const result = getDataByLanguage('variables.stuff.key_non_existent', 'ja')
      expect(result).toBeUndefined()
    }
    // Returns undefined if not only the key is missing but the whole file too
    {
      const result = getDataByLanguage('variables.notpresent.whatever', 'en')
      expect(result).toBeUndefined()
    }
  })

  test('getDataByLanguage reusables English', () => {
    // The most basic test
    {
      const result = getDataByLanguage('reusables.coolness', 'en')
      expect(result).toBe('This is *Markdown*')
    }
    // Test that memoization doesn't go wrong
    {
      const result = getDataByLanguage('reusables.otherness', 'en')
      expect(result).toBe('**Also** Markdown')
    }
  })

  test('getDataByLanguage reusables non-English', () => {
    // The most basic test
    {
      const result = getDataByLanguage('reusables.coolness', 'ja')
      expect(result).toBe('これがマークダウンです')
    }
    // Test translations fall back to English if file doesn't exist
    {
      const result = getDataByLanguage('reusables.otherness', 'ja')
      expect(result).toBe('**Also** Markdown')
    }
  })

  test('getDataByLanguage failures', () => {
    // The most basic test
    {
      const result = getDataByLanguage('reusables.neverheardof', 'en')
      expect(result).toBeUndefined()
    }
    // Test translations will try English but fail if the fallback fails too
    {
      const result = getDataByLanguage('reusables.neverheardof', 'ja')
      expect(result).toBeUndefined()
    }
  })

  test('getUIDataMerged', () => {
    // The most basic test
    {
      const result = getUIDataMerged('en')
      expect(result.key).toBe('Value')
      expect(result.deep.er).toBe('Depth')
    }
    // In a specific language
    {
      const result = getUIDataMerged('ja')
      expect(result.key).toBe('価値')
      expect(result.deep.er).toBe('深さ')
      // Note how it falls back to English on that key
      expect(result.deep.est).toBe('Deepest')
    }
  })

  test('getDeepDataByLanguage', () => {
    // The most basic test
    {
      const result = getDeepDataByLanguage('variables', 'en')
      expect(result.stuff.foo).toBe('Foo')
      expect(result.stuff.bar).toBe('Bar')
    }
    // All reusables
    {
      const result = getDeepDataByLanguage('reusables', 'en')
      expect(result['coolness.md']).toBe('This is *Markdown*')
    }
  })
})
