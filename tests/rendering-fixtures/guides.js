import { getDOMCached as getDOM } from '../helpers/e2etest.js'

describe('guides', () => {
  test("page's title should be document title", async () => {
    const $ = await getDOM('/code-security/guides')
    // This is what you'd find in tests/fixtures/content/code-security/guides.md
    const title = 'Guides for cool security'
    expect($('title').text()).toMatch(title)
    expect($('h1').text()).toMatch(title)
    const learningPaths = $('h2#learning-paths')
    expect(learningPaths.text()).toMatch('Code security learning paths')
    const allGuides = $('h2#all-guides')
    expect(allGuides.text()).toMatch('All Code security guides')
  })
})

describe('learning tracks', () => {
  test('start the first learning track and come back via the navigation banner', async () => {
    const $ = await getDOM('/code-security/guides')
    const links = $('[data-testid=feature-track] a')
    const link = links.filter((_, el) => $(el).text() === 'Start learning path').first()
    expect(link.attr('href')).toMatch('learn=foo_bar')
    expect(link.attr('href')).toMatch('learnProduct=code-security')

    // Go the first "Start learning path" link
    const $2 = await getDOM(link.attr('href'))
    const card2 = $2('[data-testid=learning-track-card]')
    // The card has 2 links. One to go back to the guide page
    // whose title is the name of the learning track
    const backLink = card2.find('a').first()
    expect(backLink.attr('href')).toBe('/en/code-security/guides')
    expect(backLink.text()).toBe('Fix the plumbing')
    // Underneath it says "1 of in learning path"
    const span = card2.find('span').filter((_, el) => $(el).text().includes('1 of 2'))
    expect(span.text()).toBe('1 of 2 in learning path')
    const nextWrapper = card2.find('span').filter((_, el) => $(el).text().includes('Next'))
    expect(nextWrapper.length).toBe(1)
    const nextLink = nextWrapper.find('a').first()
    expect(nextLink.attr('href')).toMatch(
      'code-security/getting-started/securing-your-organization'
    )
    expect(nextLink.attr('href')).toMatch('learn=foo_bar')
    expect(nextLink.attr('href')).toMatch('learnProduct=code-security')
    expect(nextLink.text()).toBe('Securing your organization')
    // There's also a nav at the bottom of the page
    const nav2 = $2('[data-testid=learning-track-nav]')
    const navNextLink = nav2.find('a').first()
    expect(navNextLink.attr('href')).toMatch('learn=foo_bar')
    expect(navNextLink.attr('href')).toMatch('learnProduct=code-security')
    expect(navNextLink.text()).toBe('Securing your organization')

    // Go to the next (last) page
    const $3 = await getDOM(nextLink.attr('href'))
    const card3 = $3('[data-testid=learning-track-card]')
    const span3 = card3.find('span').filter((_, el) => $(el).text().includes('2 of 2'))
    expect(span3.text()).toBe('2 of 2 in learning path')
    // No "Next:" link now
    const nextWrapper3 = card3.find('span').filter((_, el) => $(el).text().includes('Next'))
    expect(nextWrapper3.length).toBe(0)
    const moreGuidesLink = card3.find('a').filter((_, el) => $(el).text().includes('More guides'))
    expect(moreGuidesLink.attr('href')).toBe('/en/code-security/guides')

    // On this last page, the nav will link to the previous page
    const nav3 = $2('[data-testid=learning-track-nav]')
    const navPrevLink = nav3.find('a').first()
    expect(navPrevLink.attr('href')).toMatch(
      'code-security/getting-started/securing-your-organization'
    )
  })

  test('with and without a valid ?learn= query string', async () => {
    // Valid
    {
      const $ = await getDOM('/code-security/getting-started/quickstart?learn=foo_bar')
      expect($('[data-testid=learning-track-card]').length).toBe(1)
      expect($('[data-testid=learning-track-nav]').length).toBe(1)
    }
    // Invalid
    {
      const $ = await getDOM('/code-security/getting-started/quickstart?learn=blablainvalid')
      expect($('[data-testid=learning-track-card]').length).toBe(0)
      expect($('[data-testid=learning-track-nav]').length).toBe(0)
    }
    // Empty
    {
      const $ = await getDOM('/code-security/getting-started/quickstart?learn=')
      expect($('[data-testid=learning-track-card]').length).toBe(0)
      expect($('[data-testid=learning-track-nav]').length).toBe(0)
    }
    // Missing
    {
      const $ = await getDOM('/code-security/getting-started/quickstart')
      expect($('[data-testid=learning-track-card]').length).toBe(0)
      expect($('[data-testid=learning-track-nav]').length).toBe(0)
    }
  })
})
