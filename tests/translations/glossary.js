import { languageKeys } from '../../lib/languages.js'
import { getDOM } from '../helpers/e2etest.js'

const langs = languageKeys.filter((lang) => lang !== 'en')

describe('glossary', () => {
  test.each(langs)('GitHub glossary page in %s', async (lang) => {
    // This will implicitly test that the page works with a 200 OK
    const $ = await getDOM(`/${lang}/get-started/quickstart/github-glossary`)
    const h2s = $('#article-contents h2')
    expect(h2s.length).toBeGreaterThan(0)
  })
})
