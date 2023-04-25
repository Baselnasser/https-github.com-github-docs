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
  await page.getByRole('link', { name: 'Second heading' }).click()
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
  await page.getByRole('link', { name: 'GitHub Actions' }).click()
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
  await page.getByRole('link', { name: 'Regular internal link' }).hover()
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
  await page.locator('#article-contents').getByRole('link', { name: 'introduction' }).hover()
  await expect(page.getByText('You can use GitHub Pages to showcase')).toBeVisible()

  // links with formatted text need to work too
  await page.locator('#article-contents').getByRole('link', { name: 'Bold is strong' }).hover()
  await expect(page.getByText('The most basic of fixture data for GitHub')).toBeVisible()
  await page.locator('#article-contents').getByRole('link', { name: 'bar' }).hover()
  await expect(page.getByText("This page doesn't really have an intro")).toBeVisible()
})

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
  // TODO: currently no languages enabled for headless tests
  // await page.getByRole('button', { name: 'Select language: current language is English' }).click()
  // await expect(page.getByRole('menuitemradio', { name: 'English' })).toBeVisible()

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
