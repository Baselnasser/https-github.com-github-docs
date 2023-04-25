// See also languages-schema.js
// Nota bene: If you are adding a new language,
// change accept-language handling in CDN config as well.

import dotenv from 'dotenv'

import { ROOT, TRANSLATIONS_ROOT } from './constants.js'
import path from 'path'

dotenv.config()

const possibleEnvVars = {
  'zh-cn': process.env.TRANSLATIONS_ROOT_ZH_CN,
  'es-es': process.env.TRANSLATIONS_ROOT_ES_ES,
  'pt-br': process.env.TRANSLATIONS_ROOT_PT_BR,
  'ru-ru': process.env.TRANSLATIONS_ROOT_RU_RU,
  'ja-jp': process.env.TRANSLATIONS_ROOT_JA_JP,
  'fr-fr': process.env.TRANSLATIONS_ROOT_FR_FR,
  'de-de': process.env.TRANSLATIONS_ROOT_DE_DE,
  'ko-kr': process.env.TRANSLATIONS_ROOT_KO_KR,
}

function getRoot(languageCode) {
  if (languageCode === 'en') return ROOT
  if (languageCode in possibleEnvVars) {
    const possibleEnvVar = possibleEnvVars[languageCode]
    if (possibleEnvVar) {
      return possibleEnvVar
    }
  } else {
    console.warn(`Not recognized languageCode '${languageCode}'`)
  }
  // Default
  return path.join(TRANSLATIONS_ROOT, languageCode)
}

// Languages in order of accept-language header frequency
// 92BD1212-61B8-4E7A: Remove `wip: Boolean` for the public ship of ko, fr, de, ru
const languages = {
  en: {
    name: 'English',
    code: 'en',
    hreflang: 'en',
    dir: getRoot('en'),
    wip: false,
  },
  zh: {
    name: 'Simplified Chinese',
    nativeName: '简体中文',
    code: 'zh',
    hreflang: 'zh-Hans',
    redirectPatterns: [/^\/cn/, /^\/zh-\w{2}/],
    dir: getRoot('zh-cn'),
    wip: false,
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    code: 'es',
    hreflang: 'es',
    dir: getRoot('es-es'),
    wip: false,
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português do Brasil',
    code: 'pt',
    hreflang: 'pt',
    redirectPatterns: [/^\/br/],
    dir: getRoot('pt-br'),
    wip: false,
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
    code: 'ru',
    hreflang: 'ru',
    dir: getRoot('ru-ru'),
    wip: false,
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    code: 'ja',
    hreflang: 'ja',
    redirectPatterns: [/^\/jp/],
    dir: getRoot('ja-jp'),
    wip: false,
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    code: 'fr',
    hreflang: 'fr',
    dir: getRoot('fr-fr'),
    wip: false,
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    code: 'de',
    hreflang: 'de',
    dir: getRoot('de-de'),
    wip: false,
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어',
    code: 'ko',
    hreflang: 'ko',
    redirectPatterns: [/^\/kr/],
    dir: getRoot('ko-kr'),
    wip: false,
  },
}

if (process.env.ENABLED_LANGUAGES) {
  if (process.env.ENABLED_LANGUAGES.toLowerCase() !== 'all') {
    Object.keys(languages).forEach((code) => {
      if (!process.env.ENABLED_LANGUAGES.includes(code)) delete languages[code]
    })
    // This makes the translation health report not valid JSON
    // console.log(`ENABLED_LANGUAGES: ${process.env.ENABLED_LANGUAGES}`)
  }
} else if (process.env.NODE_ENV === 'test') {
  // Unless explicitly set, when running tests default to just English
  Object.keys(languages).forEach((code) => {
    if (code !== 'en') delete languages[code]
  })
}

export const languageKeys = Object.keys(languages)

export const languagePrefixPathRegex = new RegExp(`^/(${languageKeys.join('|')})(/|$)`)

/** Return true if the URL is something like /en/foo or /ja but return false
 * if it's something like /foo or /foo/bar or /fr (because French (fr)
 * is currently not an active language)
 */
export function pathLanguagePrefixed(path) {
  return languagePrefixPathRegex.test(path)
}

export default languages
