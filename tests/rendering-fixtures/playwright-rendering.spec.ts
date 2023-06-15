import dotenv from 'dotenv'
import { test, expect } from '@playwright/test'

// This exists for the benefit of local testing.
// In GitHub Actions, we rely on setting the environment variable directly
// but for convenience, for local development, engineers might have a
// .env file that can set environment variable. E.g. ELASTICSEARCH_URL.
// The `start-server.js` script uses dotenv too, but since Playwright
// tests only interface with the server via HTTP, we too need to find
// this out.
dotenv.config()

const SEARCH_TESTS = !!process.env.ELASTICSEARCH_URL

test('view home page', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/GitHub Docs/)
})

test('view the for-playwright article', async ({ page }) => {
  await page.goto('/get-started/foo/for-playwright')
  await expect(page).toHaveTitle(/For Playwright - GitHub Docs/)

  // This is the right-hand sidebar mini-toc link
  await page
    .getByTestId('minitoc')
    .getByRole('link', { name: 'Second heading', exact: true })
    .click()
  await expect(page).toHaveURL(/for-playwright#second-heading/)
})

test('use sidebar to go to Hello World page', async ({ page }) => {
  await page.goto('/')

  await page.getByTestId('sidebar').getByRole('link', { name: 'Get started' }).click()
  await expect(page).toHaveTitle(/Getting started with HubGit/)

  await page.getByTestId('product-sidebar').getByText('Quickstart').click()
  await page.getByTestId('product-sidebar').getByRole('link', { name: 'Hello World' }).click()
  await expect(page).toHaveURL(/\/en\/get-started\/quickstart\/hello-world/)
  await expect(page).toHaveTitle(/Hello World - GitHub Docs/)
})

test('do a search from home page and click on "Foo" page', async ({ page }) => {
  test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

  await page.goto('/')
  await page.getByTestId('site-search-input').click()
  await page.getByTestId('site-search-input').fill('serve playwright')
  await page.getByRole('button', { name: 'Search' }).click()
  await expect(page).toHaveURL(/\/search\?query=serve\+playwright/)
  await expect(page).toHaveTitle(/\d Search results for "serve playwright"/)

  await page.getByRole('link', { name: 'For Playwright' }).click()

  await expect(page).toHaveURL(/\/get-started\/foo\/for-playwright$/)
  await expect(page).toHaveTitle(/For Playwright/)
})

test.describe('platform picker', () => {
  test('switch operating systems', async ({ page }) => {
    await page.goto('/get-started/liquid/platform-specific')

    await page.getByTestId('platform-picker').getByRole('link', { name: 'Mac' }).click()
    await expect(page).toHaveURL(/\?platform=mac/)
    await expect(page.getByRole('heading', { name: /Macintosh/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Windows 95/ })).not.toBeVisible()

    await page.getByTestId('platform-picker').getByRole('link', { name: 'Windows' }).click()
    await expect(page).toHaveURL(/\?platform=windows/)
    await expect(page.getByRole('heading', { name: /Windows 95/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Macintosh/ })).not.toBeVisible()
  })

  test('remember last clicked OS', async ({ page }) => {
    await page.goto('/get-started/liquid/platform-specific')
    await page.getByTestId('platform-picker').getByRole('link', { name: 'Windows' }).click()

    // Return and now the cookie should start us off on Windows again
    await page.goto('/get-started/liquid/platform-specific')
    await expect(page.getByRole('heading', { name: /Windows 95/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Macintosh/ })).not.toBeVisible()
  })
})

test.describe('tool picker', () => {
  test('switch tools', async ({ page }) => {
    await page.goto('/get-started/liquid/tool-specific')

    await page.getByTestId('tool-picker').getByRole('link', { name: 'GitHub CLI' }).click()
    await expect(page).toHaveURL(/\?tool=cli/)
    await expect(page.getByText('this is cli content')).toBeVisible()
    await expect(page.getByText('this is webui content')).not.toBeVisible()

    await page.getByTestId('tool-picker').getByRole('link', { name: 'Web browser' }).click()
    await expect(page).toHaveURL(/\?tool=webui/)
    await expect(page.getByText('this is cli content')).not.toBeVisible()
    await expect(page.getByText('this is desktop content')).not.toBeVisible()
    await expect(page.getByText('this is webui content')).toBeVisible()
  })

  test('prefer default tool', async ({ page }) => {
    await page.goto('/get-started/liquid/tool-specific')

    // defaultTool is set in the fixture frontmatter
    await expect(page.getByText('this is desktop content')).toBeVisible()
    await expect(page.getByText('this is webui content')).not.toBeVisible()
    await expect(page.getByText('this is cli content')).not.toBeVisible()
  })

  test('remember last clicked tool', async ({ page }) => {
    await page.goto('/get-started/liquid/tool-specific')
    await page.getByTestId('tool-picker').getByRole('link', { name: 'Web browser' }).click()

    // Return and now the cookie should start us off with Web UI content again
    await page.goto('/get-started/liquid/tool-specific')
    await expect(page.getByText('this is cli content')).not.toBeVisible()
    await expect(page.getByText('this is desktop content')).not.toBeVisible()
    await expect(page.getByText('this is webui content')).toBeVisible()
  })
})

test('filter article cards', async ({ page }) => {
  await page.goto('/code-security/guides')
  const articleCards = page.getByTestId('article-cards')
  await expect(articleCards.getByText('Secure quickstart')).toBeVisible()
  await expect(articleCards.getByText('Securing your organization')).toBeVisible()

  // For both the type and topic dropdowns, with the Primer component we use it
  // ends creating a button to open the dropdowns so that's why we're clicking
  // a button here to expand the option items.

  // all the articles are displayed, filter by topic
  await page.getByTestId('card-filter-topics').getByRole('button', { name: 'All' }).click()
  await page.getByTestId('topics-dropdown').getByText('Organizations').click()
  await expect(articleCards.getByText('Secure quickstart')).not.toBeVisible()
  await expect(articleCards.getByText('Securing your organization')).toBeVisible()

  // now show all the articles again and then filter by type
  await page
    .getByTestId('card-filter-topics')
    .getByRole('button', { name: 'Organizations' })
    .click()
  await page.getByTestId('topics-dropdown').getByText('All').click()
  await page.getByTestId('card-filter-types').getByRole('button', { name: 'All' }).click()
  await page.getByTestId('types-dropdown').getByText('Quickstart').click()
  await expect(articleCards.getByText('Secure quickstart')).toBeVisible()
  await expect(articleCards.getByText('Securing your organization')).not.toBeVisible()
})

test('navigate with side bar into article inside a map-topic inside a category', async ({
  page,
}) => {
  // Our TreeView sidebar only shows "2 levels". If you click and expand
  // the category, you'll be able to see the map-topic and the article
  // within.
  await page.goto('/')
  await page.getByTestId('sidebar').getByRole('link', { name: 'GitHub Actions' }).click()
  await page.getByTestId('sidebar').getByRole('treeitem', { name: 'Category' }).click()
  await page.getByText('Map & Topic').click()
  await page.getByRole('link', { name: '<article>' }).click()
  await expect(page.getByRole('heading', { name: 'Article title' })).toBeVisible()
  await expect(page).toHaveURL(/actions\/category\/map-topic\/article/)
})

test('hovercards', async ({ page }) => {
  await page.goto('/pages/quickstart')

  // hover over a link and check for intro content from hovercard
  await page.locator('#article-contents').getByRole('link', { name: 'Quickstart' }).hover()
  await expect(
    page.getByText(
      'Get started using GitHub to manage Git repositories and collaborate with others.'
    )
  ).toBeVisible()

  // now move the mouse away from hovering over the link, the hovercard should
  // no longer be visible
  await page.mouse.move(0, 0)
  await expect(
    page.getByText(
      'Get started using GitHub to manage Git repositories and collaborate with others.'
    )
  ).not.toBeVisible()

  // external links don't have a hovercard
  await page.getByRole('link', { name: 'github.com/github/docs' }).hover()
  await expect(page.getByTestId('popover')).not.toBeVisible()

  // links in the main navigation sidebar don't have a hovercard
  await page.getByTestId('sidebar').getByRole('link', { name: 'Quickstart' }).hover()
  await expect(page.getByTestId('popover')).not.toBeVisible()

  // links in the secondary minitoc sidebar don't have a hovercard
  await page
    .getByTestId('minitoc')
    .getByRole('link', { name: 'Regular internal link', exact: true })
    .hover()
  await expect(page.getByTestId('popover')).not.toBeVisible()

  // links in the article intro have a hovercard
  await page.locator('#article-intro').getByRole('link', { name: 'article intro link' }).hover()
  await expect(page.getByText('You can use GitHub Pages to showcase')).toBeVisible()
  // this page's intro has two links; one in-page and one internal
  await page.locator('#article-intro').getByRole('link', { name: 'another link' }).hover()
  await expect(
    page.getByText('Follow this Hello World exercise to get started with GitHub.')
  ).toBeVisible()

  // same page anchor links have a hovercard
  await page
    .locator('#article-contents')
    .getByRole('link', { name: 'introduction', exact: true })
    .hover()
  await expect(page.getByText('You can use GitHub Pages to showcase')).toBeVisible()

  // links with formatted text need to work too
  await page.locator('#article-contents').getByRole('link', { name: 'Bold is strong' }).hover()
  await expect(page.getByText('The most basic of fixture data for GitHub')).toBeVisible()
  await page.locator('#article-contents').getByRole('link', { name: 'bar' }).hover()
  await expect(page.getByText("This page doesn't really have an intro")).toBeVisible()
})

test.describe('test nav at different viewports', () => {
  test('x-large viewports - 1280+', async ({ page }) => {
    page.setViewportSize({
      width: 1300,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    // in article breadcrumbs at xl viewport should remove last breadcrumb so
    // for this page we should only have 'Get Started / Foo'
    expect(await page.getByTestId('breadcrumbs-in-article').getByRole('link').all()).toHaveLength(2)
    await expect(page.getByTestId('breadcrumbs-in-article').getByText('Foo')).toBeVisible()
    await expect(page.getByTestId('breadcrumbs-in-article').getByText('Bar')).not.toBeVisible()
  })

  test('large -> x-large viewports - 1012+', async ({ page }) => {
    page.setViewportSize({
      width: 1013,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    // version picker should be visible
    await page
      .getByRole('button', {
        name: 'Select GitHub product version: current version is free-pro-team@latest',
      })
      .click()
    expect((await page.getByRole('menuitemradio').all()).length).toBeGreaterThan(0)
    await expect(page.getByRole('menuitemradio', { name: 'Enterprise Cloud' })).toBeVisible()

    // language picker is visible
    await page.getByRole('button', { name: 'Select language: current language is English' }).click()
    await expect(page.getByRole('menuitemradio', { name: 'English' })).toBeVisible()

    // header sign up button is visible
    await expect(page.getByTestId('header-signup')).toBeVisible()
  })

  test('large viewports - 1012-1279', async ({ page }) => {
    page.setViewportSize({
      width: 1013,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    // breadcrumbs show up in the header, for this page we should have
    // 3 items 'Get Started / Foo / Bar'
    // in-article breadcrumbs don't show up
    await expect(page.getByTestId('breadcrumbs-header')).toBeVisible()
    expect(await page.getByTestId('breadcrumbs-header').getByRole('link').all()).toHaveLength(3)
    await expect(page.getByTestId('breadcrumbs-in-article')).not.toBeVisible()

    // hamburger button for sidebar overlay is visible
    await expect(page.getByTestId('sidebar-hamburger')).toBeVisible()
    await page.getByTestId('sidebar-hamburger').click()
    await expect(page.getByTestId('sidebar-product-dialog')).toBeVisible()
  })

  test('medium viewports - 768-1011', async ({ page }) => {
    page.setViewportSize({
      width: 1000,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    // version picker is visible
    await page
      .getByRole('button', {
        name: 'Select GitHub product version: current version is free-pro-team@latest',
      })
      .click()
    expect((await page.getByRole('menuitemradio').all()).length).toBeGreaterThan(0)
    await expect(page.getByRole('menuitemradio', { name: 'Enterprise Cloud' })).toBeVisible()

    // language picker is in mobile menu
    await page.getByTestId('mobile-menu').click()
    await page.getByRole('button', { name: 'Select language: current language is English' }).click()
    await expect(page.getByRole('menuitemradio', { name: 'English' })).toBeVisible()

    // sign up button is in mobile menu
    await expect(page.getByTestId('mobile-signup')).toBeVisible()

    // hamburger button for sidebar overlay is visible
    await expect(page.getByTestId('sidebar-hamburger')).toBeVisible()
    await page.getByTestId('sidebar-hamburger').click()
    await expect(page.getByTestId('sidebar-product-dialog')).toBeVisible()
  })

  test('small viewports - 544-767', async ({ page }) => {
    page.setViewportSize({
      width: 500,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')

    // header sign-up button is not visible
    await expect(page.getByTestId('header-signup')).not.toBeVisible()

    // language picker is not visible
    await expect(page.getByTestId('language-picker')).not.toBeVisible()

    // version picker is not visible
    await expect(
      page.getByRole('button', {
        name: 'Select GitHub product version: current version is free-pro-team@latest',
      })
    ).not.toBeVisible()

    // version picker is in mobile menu
    await expect(page.getByTestId('version-picker')).not.toBeVisible()
    await page.getByTestId('mobile-menu').click()
    await expect(page.getByTestId('open-mobile-menu').getByTestId('version-picker')).toBeVisible()

    // language picker is in mobile menu
    await expect(page.getByTestId('open-mobile-menu').getByTestId('language-picker')).toBeVisible()

    // sign up button is in mobile menu
    await expect(page.getByTestId('open-mobile-menu').getByTestId('version-picker')).toBeVisible()

    // hamburger button for sidebar overlay is visible
    await expect(page.getByTestId('sidebar-hamburger')).toBeVisible()
    await page.getByTestId('sidebar-hamburger').click()
    await expect(page.getByTestId('sidebar-product-dialog')).toBeVisible()
  })

  test('do a search when the viewport is x-small', async ({ page }) => {
    test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

    page.setViewportSize({
      width: 500,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')
    await page.getByRole('button', { name: 'Open Search Bar' }).click()
    await page.getByTestId('site-search-input').click()
    await page.getByTestId('site-search-input').fill('serve playwright')
    await page.getByTestId('site-search-input').press('Enter')
    await expect(page).toHaveURL(/\/search\?query=serve\+playwright/)
    await expect(page).toHaveTitle(/\d Search results for "serve playwright"/)
  })

  test('do a search when the viewport is medium', async ({ page }) => {
    test.skip(!SEARCH_TESTS, 'No local Elasticsearch, no tests involving search')

    page.setViewportSize({
      width: 1000,
      height: 700,
    })
    await page.goto('/get-started/foo/bar')
    await page.getByTestId('site-search-input').click()
    await page.getByTestId('site-search-input').fill('serve playwright')
    await page.getByTestId('site-search-input').press('Enter')
    await expect(page).toHaveURL(/\/search\?query=serve\+playwright/)
    await expect(page).toHaveTitle(/\d Search results for "serve playwright"/)
  })
})

test.describe('survey', () => {
  test('happy path, thumbs up and enter email', async ({ page }) => {
    await page.goto('/get-started/foo/for-playwright')

    let fulfilled = 0
    await page.route('**/api/events', (route, request) => {
      route.fulfill({})
      expect(request.method()).toBe('POST')
      fulfilled++
      // At the time of writing you can't get the posted payload
      // when you use `navigator.sendBeacon(url, data)`.
      // So we can't make assertions about the payload.
      // See https://github.com/microsoft/playwright/issues/12231
    })

    // The label is visually an SVG. Finding it by its `for` value feels easier.
    await page.locator('[for=survey-yes]').click()
    await page.getByPlaceholder('email@example.com').click()
    await page.getByPlaceholder('email@example.com').fill('test@example.com')

    await page.getByRole('button', { name: 'Send' }).click()
    // Because it sent one about the thumbs and then another with the email.
    expect(fulfilled).toBe(2)
    await expect(page.getByTestId('survey-end')).toBeVisible()
  })

  test('thumbs down without filling in the form sends an API POST', async ({ page }) => {
    await page.goto('/get-started/foo/for-playwright')

    let fulfilled = 0
    await page.route('**/api/events', (route, request) => {
      route.fulfill({})
      expect(request.method()).toBe('POST')
      fulfilled++
      // At the time of writing you can't get the posted payload
      // when you use `navigator.sendBeacon(url, data)`.
      // So we can't make assertions about the payload.
      // See https://github.com/microsoft/playwright/issues/12231
    })

    await page.locator('[for=survey-yes]').click()
    expect(fulfilled).toBe(1)

    await expect(page.getByRole('button', { name: 'Send' })).toBeVisible()
    await page.getByRole('button', { name: 'Cancel' }).click()
    await expect(page.getByRole('button', { name: 'Send' })).not.toBeVisible()
  })
})

test.describe('rest API reference pages', () => {
  test('REST code-scanning', async ({ page }) => {
    await page.goto('/rest')
    await page.getByRole('treeitem', { name: 'Code Scanning' }).locator('svg').click()
    await page.getByText('Code Scanning').click()
    await page.getByTestId('sidebar').getByRole('link', { name: 'About code scanning' }).click()
    await expect(page).toHaveURL(/\/en\/rest\/code-scanning\?apiVersion=/)
    await expect(page).toHaveTitle(/Code Scanning - GitHub Docs/)
  })
  test('REST actions', async ({ page }) => {
    await page.goto('/rest')
    await page.getByTestId('sidebar').getByText('Actions').click()
    await page.getByTestId('rest-subcategory').getByRole('link', { name: 'Artifacts' }).click()
    await page
      .getByTestId('rest-subcategory')
      .getByRole('link', { name: 'About artifacts in GitHub Actions' })
      .click()
    await expect(page).toHaveURL(/\/en\/rest\/actions\/artifacts\?apiVersion=/)
    await expect(page).toHaveTitle(/GitHub Actions Artifacts - GitHub Docs/)
  })
})

test.describe('translations', () => {
  test('view Japanese home page', async ({ page }) => {
    await page.goto('/ja')
    await expect(page.getByRole('heading', { name: '日本 GitHub Docs' })).toBeVisible()
  })

  test('switch to English from Japanese using banner on home page', async ({ page }) => {
    await page.goto('/ja')
    await page.getByRole('link', { name: 'English documentation' }).click()
    await expect(page).toHaveURL('/en')
    await expect(page.getByRole('heading', { name: 'GitHub Docs' })).toBeVisible()
  })

  test('switch to Japanese from English using widget on home page', async ({ page }) => {
    await page.goto('/en')
    await page.getByRole('button', { name: 'Select language: current language is English' }).click()
    await page.getByRole('menuitemradio', { name: '日本語' }).click()
    await expect(page).toHaveURL('/ja')
    await expect(page.getByRole('heading', { name: '日本 GitHub Docs' })).toBeVisible()

    // Having done this once, should now use a cookie to redirect back to Japanese
    await page.goto('/')
    await expect(page).toHaveURL('/ja')
  })

  test('switch to English from Japanese using banner on article', async ({ page }) => {
    await page.goto('/ja/get-started/quickstart/hello-world')
    await expect(page.getByRole('heading', { name: 'こんにちは World' })).toBeVisible()
    await page.getByRole('link', { name: 'English documentation' }).click()
    await expect(page).toHaveURL('/en/get-started/quickstart/hello-world')
    await expect(page.getByRole('heading', { name: 'Hello World' })).toBeVisible()
  })

  test('switch to Japanese from English using widget on article', async ({ page }) => {
    await page.goto('/get-started/quickstart/hello-world')
    await page.getByRole('button', { name: 'Select language: current language is English' }).click()
    await page.getByRole('menuitemradio', { name: '日本語' }).click()
    await expect(page).toHaveURL('/ja/get-started/quickstart/hello-world')
    await expect(page.getByRole('heading', { name: 'こんにちは World' })).toBeVisible()

    // Having done this once, should now use a cookie to redirect
    // back to Japanese.
    // Playwright will cache this redirect, so we need to add something
    // to "cache bust" the URL
    const cb = `?cb=${Math.random()}`
    await page.goto('/get-started/quickstart/hello-world' + cb)
    await expect(page).toHaveURL('/ja/get-started/quickstart/hello-world' + cb)

    // If you go, with the Japanese cookie, to the English page directly,
    // it will offer a link to the Japanese URL in a banner.
    await page.goto('/en/get-started/quickstart/hello-world')
    await page.getByRole('link', { name: 'Japanese' }).click()
    await expect(page).toHaveURL('/ja/get-started/quickstart/hello-world')
  })
})
