/**
 * To be able to run these tests you need to index the fixtures!
 * And you need to have an Elasticsearch URL to connect to for the server.
 *
 * To index the fixtures, run:
 *
 *   ELASTICSEARCH_URL=http://localhost:9200 npm run index-test-fixtures
 *
 * This will replace any "real" Elasticsearch indexes you might have so
 * once you're done working on jest tests you need to index real
 * content again.
 */

import { jest, test, expect } from '@jest/globals'

import { describeIfElasticsearchURL } from '../helpers/conditional-runs.js'
import { get } from '../helpers/e2etest.js'

if (!process.env.ELASTICSEARCH_URL) {
  console.warn(
    'None of the API search middleware tests are run because ' +
      "the environment variable 'ELASTICSEARCH_URL' is currently not set."
  )
}

// This suite only runs if $ELASTICSEARCH_URL is set.
describeIfElasticsearchURL('search v1 middleware', () => {
  jest.setTimeout(60 * 1000)

  test('basic search', async () => {
    const sp = new URLSearchParams()
    // To see why this will work,
    // see tests/content/fixtures/search-indexes/github-docs-dotcom-en-records.json
    // which clearly has a record with the title "Foo"
    sp.set('query', 'foo')
    const res = await get('/api/search/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)

    expect(results.meta).toBeTruthy()
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    expect(results.meta.found.relation).toBeTruthy()
    expect(results.meta.page).toBe(1)
    expect(results.meta.size).toBeGreaterThanOrEqual(1)
    expect(results.meta.took.query_msec).toBeGreaterThanOrEqual(0)
    expect(results.meta.took.total_msec).toBeGreaterThanOrEqual(0)

    // Might be empty but at least an array
    expect(results.hits).toBeTruthy()
    // The word 'foo' appears in more than 1 document in the fixtures.
    expect(results.hits.length).toBeGreaterThanOrEqual(1)
    // ...but only one has the word "foo" in its title so we can
    // be certain it comes first.
    const hit = results.hits[0]
    // This specifically checks what we expect of version v1
    expect(hit.url).toBe('/en/foo')
    expect(hit.title).toBe('Foo')
    expect(hit.breadcrumbs).toBe('fooing')
    // By default, 'title' and 'content' is included in highlights,
    // but not 'headings'
    expect(hit.highlights.title[0]).toBe('<mark>Foo</mark>')
    expect(hit.highlights.content[0]).toMatch('<mark>foo</mark>')
    expect(hit.highlights.headings).toBeUndefined()

    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe('api-search:en')
  })

  test('basic search in Japanese', async () => {
    const sp = new URLSearchParams()
    // To see why this will work,
    // see tests/content/fixtures/search-indexes/github-docs-dotcom-en-records.json
    // which clearly has a record with the title "Foo"
    sp.set('query', 'foo')
    sp.set('language', 'ja')
    const res = await get('/api/search/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)

    expect(results.meta).toBeTruthy()
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    expect(results.meta.found.relation).toBeTruthy()
    expect(results.meta.page).toBe(1)
    expect(results.meta.size).toBeGreaterThanOrEqual(1)
    expect(results.meta.took.query_msec).toBeGreaterThanOrEqual(0)
    expect(results.meta.took.total_msec).toBeGreaterThanOrEqual(0)

    // Might be empty but at least an array
    expect(results.hits).toBeTruthy()
    // The word 'foo' appears in more than 1 document in the fixtures.
    expect(results.hits.length).toBeGreaterThanOrEqual(1)
    // ...but only one has the word "foo" in its title so we can
    // be certain it comes first.
    const hit = results.hits[0]
    // This specifically checks what we expect of version v1
    expect(hit.url).toBe('/ja/foo')
    expect(hit.title).toBe('フー')
    expect(hit.breadcrumbs).toBe('fooing')

    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe('api-search:ja')
  })

  test('debug search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('debug', '1') // Note!
    const res = await get('/api/search/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    // safe because we know exactly the fixtures
    const hit = results.hits[0]
    expect(hit.popularity).toBeTruthy()
    expect(hit.score).toBeTruthy()
    expect(hit.es_url).toBeTruthy()
  })

  test('search with and without autocomplete on', async () => {
    // *Without* autocomplete=true
    {
      const sp = new URLSearchParams()
      sp.set('query', 'sill')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(200)
      const results = JSON.parse(res.text)
      // Fixtures contains no word called 'sill'. It does contain the term
      // 'silly' which, in English, becomes 'silli` when stemmed.
      // Because we don't use `&autocomplete=true` this time, we expect
      // to find nothing.
      expect(results.meta.found.value).toBe(0)
    }

    // *With* autocomplete=true
    {
      const sp = new URLSearchParams()
      sp.set('query', 'sill')
      sp.set('autocomplete', 'true')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(200)
      const results = JSON.parse(res.text)
      expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
      const hit = results.hits[0]
      const contentHighlights = hit.highlights.content
      expect(contentHighlights[0]).toMatch('<mark>silly</mark>')
    }
  })

  test('find nothing', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'xojixjoiwejhfoiuwehjfioweufhj')
    const res = await get('/api/search/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    expect(results.hits.length).toBe(0)
    expect(results.meta.found.value).toBe(0)
  })

  test('configurable highlights', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'introduction heading')
    sp.append('highlights', 'headings')
    sp.append('highlights', 'content')
    const res = await get('/api/search/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    for (const hit of results.hits) {
      expect(hit.highlights.title).toBeFalsy()
      expect(hit.highlights.headings).toBeTruthy()
      expect(hit.highlights.content).toBeTruthy()
    }
  })

  test('highlights keys matches highlights configuration', async () => {
    const sp = new URLSearchParams()
    // This will match because it's in the 'content' but not in 'headings'
    sp.set('query', 'Fact of life')
    sp.set('highlights', 'headings')
    const res = await get('/api/search/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    for (const hit of results.hits) {
      expect(hit.highlights.headings).toBeTruthy()
      expect(hit.highlights.title).toBeFalsy()
      expect(hit.highlights.content).toBeFalsy()
    }
  })

  test('version can be aliased', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('version', 'dotcom')
    const res1 = await get('/api/search/v1?' + sp)
    expect(res1.statusCode).toBe(200)
    const results1 = JSON.parse(res1.text)

    sp.set('version', 'free-pro-team@latest')
    const res2 = await get('/api/search/v1?' + sp)
    expect(res2.statusCode).toBe(200)
    const results2 = JSON.parse(res2.text)
    expect(results1.hits[0].id).toBe(results2.hits[0].id)
  })

  test('invalid parameters', async () => {
    // query is not even present
    {
      const res = await get('/api/search/v1')
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toBeTruthy()
    }
    // query is just whitespace
    {
      const sp = new URLSearchParams()
      sp.set('query', '  ')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toBeTruthy()
    }
    // unrecognized language
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('language', 'xxx')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toMatch('language')
    }
    // unrecognized page
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('page', '9999')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toMatch('page')
    }
    // unrecognized version
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('version', 'xxxxx')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toMatch("'xxxxx'")
      expect(JSON.parse(res.text).field).toMatch('version')
    }
    // unrecognized size
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('size', 'not a number')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toMatch('size')
    }
    // unrecognized sort
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('sort', 'neverheardof')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toMatch('sort')
    }
    // unrecognized highlights
    {
      const sp = new URLSearchParams()
      sp.set('query', 'test')
      sp.set('highlights', 'neverheardof')
      const res = await get('/api/search/v1?' + sp)
      expect(res.statusCode).toBe(400)
      expect(JSON.parse(res.text).error).toMatch('neverheardof')
    }
  })

  test('breadcrumbless records should always return a string', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'breadcrumbs')
    const res = await get('/api/search/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    // safe because we know exactly the fixtures
    const hit = results.hits[0]
    expect(hit.breadcrumbs).toBe('')
  })
})

describeIfElasticsearchURL('search legacy middleware', () => {
  jest.setTimeout(60 * 1000)

  test('basic legacy search', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('language', 'en')
    sp.set('version', 'dotcom')
    const res = await get('/api/search/legacy?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    expect(Array.isArray(results)).toBeTruthy()
    const foundURLS = results.map((result) => result.url)
    expect(foundURLS.includes('/en/foo')).toBeTruthy()
  })

  test('basic legacy search with single filter', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('language', 'en')
    sp.set('version', 'dotcom')
    sp.set('filters', 'Fixture')
    const res = await get('/api/search/legacy?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    expect(Array.isArray(results)).toBeTruthy()
    const foundURLS = results.map((result) => result.url)
    expect(foundURLS.includes('/en/foo')).toBeTruthy()
    expect(foundURLS.includes('/en/bar')).toBeTruthy()
    const foundTopics = results.map((result) => result.topics)
    expect(foundTopics.every((topics) => topics.includes('Fixture'))).toBeTruthy()
  })

  test('basic legacy search with multiple filters', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('language', 'en')
    sp.set('version', 'dotcom')
    sp.set('filters', 'Fixture')
    sp.append('filters', 'Get started')
    const res = await get('/api/search/legacy?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    expect(Array.isArray(results)).toBeTruthy()
    const foundURLS = results.map((result) => result.url)
    expect(foundURLS.includes('/en/bar')).toBeTruthy()
    const foundTopics = results.map((result) => result.topics)
    expect(
      foundTopics.every((topics) => topics.includes('Fixture') && topics.includes('Get started'))
    ).toBeTruthy()
  })

  test('basic legacy search with unknown filters', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('language', 'en')
    sp.set('version', 'dotcom')
    sp.set('filters', 'Never heard of')
    const res = await get('/api/search/legacy?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.text)
    expect(Array.isArray(results)).toBeTruthy()
    expect(results.length).toBe(0)
  })
})
