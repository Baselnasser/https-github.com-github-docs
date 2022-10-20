import { expect, jest, test } from '@jest/globals'

import { get } from '../helpers/e2etest.js'

describe('general /api pages', () => {
  jest.setTimeout(60 * 1000)

  test("any /api URL that isn't found should JSON", async () => {
    const res = await get('/api')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toMatch(/application\/json/)
  })

  test("any /api/* URL that isn't found should be JSON", async () => {
    const res = await get('/api/yadayada')
    expect(res.statusCode).toBe(404)
    expect(JSON.parse(res.text).error).toBe('/yadayada not found')
  })
})
