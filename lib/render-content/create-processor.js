import { unified } from 'unified'
import markdown from 'remark-parse-no-trim'
import markdownNext from 'remark-parse'
import gfm from 'remark-gfm'
import emoji from 'remark-gemoji-to-emoji'
import remark2rehype from 'remark-rehype'
import raw from 'rehype-raw'
import slug from 'rehype-slug'
import autolinkHeadings from 'rehype-autolink-headings'
import highlight from 'rehype-highlight'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import http from 'highlight.js/lib/languages/http'
import groovy from 'highlight.js/lib/languages/groovy'
import erb from 'highlight.js/lib/languages/erb'
import powershell from 'highlight.js/lib/languages/powershell'
import graphql from 'highlight.js/lib/languages/graphql'
import html from 'rehype-stringify'
import remarkCodeExtra from 'remark-code-extra'
import codeHeader from './plugins/code-header.js'
import rewriteLocalLinks from './plugins/rewrite-local-links.js'
import rewriteImgSources from './plugins/rewrite-asset-urls.js'
import useEnglishHeadings from './plugins/use-english-headings.js'
import wrapInElement from './plugins/wrap-in-element.js'
import doctocatLinkIcon from './doctocat-link-icon.js'

export default function createProcessor(context) {
  return unified()
    .use(process.env.COMMONMARK ? markdownNext : markdown)
    .use(process.env.COMMONMARK ? gfm : null)
    .use(remarkCodeExtra, { transform: codeHeader })
    .use(emoji)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(slug)
    .use(useEnglishHeadings, context)
    .use(autolinkHeadings, {
      behavior: 'prepend',
      properties: { ariaHidden: true, tabIndex: -1, class: 'doctocat-link' },
      content: doctocatLinkIcon,
    })
    .use(highlight, {
      languages: { graphql, dockerfile, http, groovy, erb, powershell },
      subset: false,
    })
    .use(raw)
    .use(wrapInElement, { selector: 'ol > li img', wrapper: 'span.procedural-image-wrapper' })
    .use(rewriteImgSources)
    .use(rewriteLocalLinks, context)
    .use(html)
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
