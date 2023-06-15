import { afterAll, jest, beforeAll, expect } from '@jest/globals'
import { liquid } from '../../lib/render-content/index.js'
import languages from '../../lib/languages.js'
import { DataDirectory } from '../helpers/data-directory.js'

describe('liquid helper tags', () => {
  jest.setTimeout(60 * 1000)

  const context = {}
  let dd
  const enDirBefore = languages.en.dir

  beforeAll(() => {
    context.currentLanguage = 'en'
    dd = new DataDirectory({
      data: {
        reusables: {
          example: 'a rose by any other name\nwould smell as sweet',
        },
      },
    })
    languages.en.dir = dd.root
  })

  afterAll(() => {
    dd.destroy()
    languages.en.dir = enDirBefore
  })

  describe('indented_data_reference tag', () => {
    test('without any number of spaces specified', async () => {
      const template = '{% indented_data_reference reusables.example %}'
      const expected = `  a rose by any other name
  would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })

    test('with 0 spaces specified', async () => {
      const template = '{% indented_data_reference reusables.example spaces=0 %}'
      const expected = `a rose by any other name
would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })

    test('with 0 spaces specified and whitespace around equals sign', async () => {
      const template = '{% indented_data_reference reusables.example spaces = 0 %}'
      const expected = `a rose by any other name
would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })

    test('with 5 spaces specified', async () => {
      const template = '{% indented_data_reference reusables.example spaces=5 %}'
      const expected = `     a rose by any other name
     would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })
  })
})
