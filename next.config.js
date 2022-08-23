import fs from 'fs'
import path from 'path'

import frontmatter from 'gray-matter'

const homepage = path.posix.join(process.cwd(), 'content/index.md')
const { data } = frontmatter(fs.readFileSync(homepage, 'utf8'))
const productIds = data.children

export default {
  // speed up production `next build` by ignoring typechecking during that step of build.
  // type-checking still occurs in the Dockerfile build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    // locales: Object.values(languages).map(({ code }) => code),
    locales: ['en', 'cn', 'ja', 'es', 'pt'],
    defaultLocale: 'en',
  },
  sassOptions: {
    quietDeps: true,
  },
  async rewrites() {
    const DEFAULT_VERSION = 'free-pro-team@latest'
    return productIds.map((productId) => {
      return {
        source: `/${productId}/:path*`,
        destination: `/${DEFAULT_VERSION}/${productId}/:path*`,
      }
    })
  },
  webpack: (config) => {
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    return config
  },

  // https://nextjs.org/docs/api-reference/next.config.js/compression
  compress: false,

  // ETags break stale content serving from the CDN. When a response has
  // an ETag, the CDN attempts to revalidate the content in the background.
  // This causes problems with serving stale content, since upon revalidating
  // the CDN marks the cached content as "fresh".
  generateEtags: false,

  experimental: {
    // The output of our getServerSideProps() return large chunks of
    // data because it contains our rendered Markdown.
    // The default, for a "Large Page Data" warning is 128KB
    // but many of our pages are much larger.
    // The warning is: https://nextjs.org/docs/messages/large-page-data
    largePageDataBytes: 1024 * 1024, // 1 MB
  },
}
