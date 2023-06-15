import { unified } from 'unified'
import markdown from 'remark-parse-no-trim'
import markdownNext from 'remark-parse'
import gfm from 'remark-gfm'
import emoji from 'remark-gemoji-to-emoji'
import remark2rehype from 'remark-rehype'
import raw from 'rehype-raw'
import slug from 'rehype-slug'
import highlight from 'rehype-highlight'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import http from 'highlight.js/lib/languages/http'
import groovy from 'highlight.js/lib/languages/groovy'
import erb from 'highlight.js/lib/languages/erb'
import powershell from 'highlight.js/lib/languages/powershell'
import graphql from 'highlight.js/lib/languages/graphql'
import html from 'rehype-stringify'
import codeHeader from './plugins/code-header.js'
import rewriteLocalLinks from './plugins/rewrite-local-links.js'
import rewriteImgSources from './plugins/rewrite-asset-urls.js'
import rewriteAssetImgTags from './plugins/rewrite-asset-img-tags.js'
import useEnglishHeadings from './plugins/use-english-headings.js'
import headingLinks from './plugins/heading-links.js'
import rewriteTheadThScope from './plugins/rewrite-thead-th-scope.js'
import rewriteForRowheaders from './plugins/rewrite-for-rowheaders.js'
import wrapProceduralImages from './plugins/wrap-procedural-images.js'
import parseInfoString from './plugins/parse-info-string.js'
import annotate from './plugins/annotate.js'

export default function createProcessor(context) {
  return (
    unified()
      .use(process.env.COMMONMARK ? markdownNext : markdown)
      .use(process.env.COMMONMARK ? gfm : null)
      // Markdown AST below vvv
      .use(parseInfoString)
      .use(emoji)
      // Markdown AST above ^^^
      .use(remark2rehype, { allowDangerousHtml: true })
      // HTML AST below vvv
      .use(slug)
      .use(useEnglishHeadings, context)
      .use(headingLinks)
      .use(codeHeader)
      .use(annotate)
      .use(highlight, {
        languages: { graphql, dockerfile, http, groovy, erb, powershell },
        subset: false,
      })
      .use(raw)
      .use(wrapProceduralImages)
      .use(rewriteTheadThScope)
      .use(rewriteForRowheaders)
      .use(rewriteImgSources)
      .use(rewriteAssetImgTags)
      .use(rewriteLocalLinks, context)
      // HTML AST above ^^^
      .use(html)
    // String below vvv
  )
}

export function createMinimalProcessor(context) {
  return unified()
    .use(process.env.COMMONMARK ? markdownNext : markdown)
    .use(process.env.COMMONMARK ? gfm : null)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(slug)
    .use(raw)
    .use(rewriteLocalLinks, context)
    .use(html)
}
