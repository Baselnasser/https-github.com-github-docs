import highlightJs from 'highlight.js'

const highlightJsLanguages = highlightJs.listLanguages()
const languageAliases = ['text']
const allowedCodeFenceLanguages = new Set([...highlightJsLanguages, ...languageAliases])

export const baseConfig = {
  // Don't run all rules by default. This must be done first to
  // enable a specific set of rules.
  default: false,
  'heading-increment': {
    // MD001
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'first-heading-h1': {
    // MD002
    severity: 'warning',
    level: 2,
    'partial-markdown-files': false,
  },
  'ul-style': {
    // MD004
    severity: 'error',
    style: 'dash',
    'partial-markdown-files': true,
  },
  'no-trailing-spaces': {
    // MD009
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'no-reversed-links': {
    // MD011
    severity: 'error',
    'partial-markdown-files': true,
  },
  'no-multiple-blanks': {
    // MD012
    severity: 'error',
    'partial-markdown-files': true,
  },
  'commands-show-output': {
    // MD014
    severity: 'error',
    'partial-markdown-files': true,
  },
  'no-missing-space-atx': {
    // MD018
    severity: 'error',
    'partial-markdown-files': true,
  },
  'no-multiple-space-atx': {
    // MD019
    severity: 'error',
    'partial-markdown-files': true,
  },
  'blanks-around-headings': {
    // MD022
    severity: 'warning',
    'partial-markdown-files': false,
  },
  'heading-start-left': {
    // MD023
    severity: 'error',
    'partial-markdown-files': false,
  },
  'no-multiple-space-blockquote': {
    // MD027
    severity: 'error',
    'partial-markdown-files': true,
  },
  'ol-prefix': {
    // MD029
    severity: 'error',
    style: 'one',
    'partial-markdown-files': true,
  },
  'list-marker-space': {
    // MD030
    severity: 'error',
    'partial-markdown-files': true,
  },
  'blanks-around-fences': {
    // MD031
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'no-space-in-emphasis': {
    // MD037
    severity: 'error',
    'partial-markdown-files': true,
  },
  'no-space-in-links': {
    // MD039
    severity: 'error',
    'partial-markdown-files': true,
  },
  'fenced-code-language': {
    // MD040
    severity: 'warning',
    'partial-markdown-files': true,
    allowed_languages: allowedCodeFenceLanguages,
  },
  'no-empty-links': {
    // MD042
    severity: 'error',
  },
  'single-trailing-newline': {
    // MD047
    severity: 'warning',
    'partial-markdown-files': true,
  },
  'emphasis-style': {
    // MD049
    severity: 'warning',
    style: 'underscore',
    'partial-markdown-files': true,
  },
  'strong-style': {
    // MD050
    severity: 'error',
    style: 'asterisk',
    'partial-markdown-files': true,
  },
}
