import path from 'path'
import { existsSync } from 'fs'

import Page from '../lib/page.js'
import { languageKeys } from '../lib/languages.js'

const languagePrefixRegex = new RegExp(`^/(${languageKeys.join('|')})(/|$)`)
const englishPrefixRegex = /^\/en(\/|$)/
const CONTENT_ROOT = 'content'

export default async function findPage(
  req,
  res,
  next,
  // Express won't execute these but it makes it easier to unit test
  // the middleware.
  { isDev = process.env.NODE_ENV === 'development', contentRoot = CONTENT_ROOT } = {}
) {
  // Filter out things like `/will/redirect` or `/_next/data/...`
  if (!languagePrefixRegex.test(req.pagePath)) {
    return next()
  }

  let page = req.context.pages[req.pagePath]
  if (page && isDev && englishPrefixRegex.test(req.pagePath)) {
    page = await rereadByPath(req.pagePath, contentRoot, req.context.currentVersion)
  }

  if (page) {
    req.context.page = page
    req.context.page.version = req.context.currentVersion
  }

  return next()
}

async function rereadByPath(uri, contentRoot, currentVersion) {
  const languageCode = uri.match(languagePrefixRegex)[1]
  const withoutLanguage = uri.replace(languagePrefixRegex, '/')
  const withoutVersion = withoutLanguage.replace(`/${currentVersion}`, '')
  // TODO: Support loading translations the same way.
  // NOTE: No one is going to test translations like this in development
  // but perhaps one day we can always and only do these kinds of lookups
  // at runtime.
  const possible = path.join(contentRoot, withoutVersion)
  const filePath = existsSync(possible) ? path.join(possible, 'index.md') : possible + '.md'
  const relativePath = path.relative(contentRoot, filePath)
  const basePath = contentRoot

  // Remember, the Page.init() can return a Promise that resolves to falsy
  // if it can't read the file in from disk. E.g. a request for /en/non/existent.
  // In other words, it's fine if it can't be read from disk. It'll get
  // handled and turned into a nice 404 message.
  return await Page.init({
    basePath,
    relativePath,
    languageCode,
  })
}
