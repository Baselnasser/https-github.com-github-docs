import {
  readCompressedJsonFileFallbackLazily,
  readCompressedJsonFileFallback,
} from '../../lib/read-json-file.js'
import { getAutomatedPageMiniTocItems } from '../get-mini-toc-items.js'
import languages from '../languages.js'
import { allVersions } from '../all-versions.js'

/* ADD LANGUAGE KEY */
let previews
let upcomingChanges
const changelog = new Map()
const graphqlSchema = new Map()
const miniTocs = new Map()

Object.keys(languages).forEach((language) => {
  miniTocs.set(language, new Map())
})

export function getGraphqlSchema(version, type) {
  const graphqlVersion = getGraphqlVersion(version)
  if (!graphqlSchema.has(graphqlVersion)) {
    graphqlSchema.set(
      graphqlVersion,
      readCompressedJsonFileFallback(`lib/graphql/static/schema-${graphqlVersion}.json`)
    )
  }
  return graphqlSchema.get(graphqlVersion)[type]
}

export function getGraphqlChangelog() {
  if (!changelog.has('schema')) {
    changelog.set(
      'schema',
      readCompressedJsonFileFallbackLazily('./lib/graphql/static/changelog.json')()
    )
  }

  return changelog.get('schema')
}

export function getGraphqlBreakingChanges(version) {
  const graphqlVersion = getGraphqlVersion(version)
  if (!upcomingChanges) {
    upcomingChanges = readCompressedJsonFileFallbackLazily(
      './lib/graphql/static/upcoming-changes.json'
    )()
  }
  return upcomingChanges[graphqlVersion]
}

export function getPreviews(version) {
  const graphqlVersion = getGraphqlVersion(version)
  if (!previews) {
    previews = readCompressedJsonFileFallbackLazily('./lib/graphql/static/previews.json')()
  }
  return previews[graphqlVersion]
}

export async function getMiniToc(context, type, items, depth = 2, markdownHeading = '') {
  const { currentLanguage, currentVersion } = context
  const graphqlVersion = getGraphqlVersion(currentVersion)
  if (!miniTocs.get(currentLanguage).has(graphqlVersion)) {
    miniTocs.get(currentLanguage).set(graphqlVersion, new Map())
  }
  if (!miniTocs.get(currentLanguage).get(graphqlVersion).has(type)) {
    const graphqlMiniTocItems = await getAutomatedPageMiniTocItems(
      items,
      context,
      depth,
      markdownHeading
    )
    miniTocs.get(currentLanguage).get(graphqlVersion).set(type, graphqlMiniTocItems)
  }
  return miniTocs.get(currentLanguage).get(graphqlVersion).get(type)
}

export async function getChangelogMiniTocs(items, context, depth = 2, markdownHeading = '') {
  if (!changelog.has('toc')) {
    changelog.set('toc', await getAutomatedPageMiniTocItems(items, context, depth, markdownHeading))
  }
  return changelog.get('toc')
}

function getGraphqlVersion(version) {
  if (!(version in allVersions)) {
    throw new Error(`Unrecognized version '${version}'. Not found in ${Object.keys(allVersions)}`)
  }
  return allVersions[version].miscVersionName
}
