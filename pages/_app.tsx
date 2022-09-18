import React, { useEffect } from 'react'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, SSRProvider } from '@primer/react'

import '../stylesheets/index.scss'

import { initializeEvents } from 'components/lib/events'
import { initializeExperiments } from 'components/lib/experiment'
import { LanguagesContext, LanguagesContextT } from 'components/context/LanguagesContext'
import { useTheme } from 'components/hooks/useTheme'

type MyAppProps = AppProps & {
  isDotComAuthenticated: boolean
  languagesContext: LanguagesContextT
}

const MyApp = ({ Component, pageProps, languagesContext }: MyAppProps) => {
  const { theme } = useTheme()

  useEffect(() => {
    initializeEvents()
    initializeExperiments()
  }, [])

  useEffect(() => {
    // The CSS from primer looks something like this:
    //
    //   @media (prefers-color-scheme: dark) [data-color-mode=auto][data-dark-theme=dark] {
    //       --color-canvas-default: black;
    //   }
    //   body {
    //       background-color: var(--color-canvas-default);
    //   }
    //
    // So if that `[data-color-mode][data-dark-theme=dark]` isn't present
    // on the body, but on a top-level wrapping `<div>` then the `<body>`
    // doesn't get the right CSS.
    // Normally, with Primer you make sure you set these things in the
    // `<body>` tag and you can use `_document.tsx` for that but that's
    // only something you can do in server-side rendering. So,
    // we use a hook to assure that the `<body>` tag has the correct
    // dataset attribute values.
    const body = document.querySelector('body')
    if (body) {
      // Note, this is the same as setting `<body data-color-mode="...">`
      // But you can't do `body.dataset['color-mode']` so you use the
      // camelCase variant and you get the same effect.
      // Appears Next.js can't modify <body> after server rendering:
      // https://stackoverflow.com/a/54774431
      body.dataset.colorMode = theme.css.colorMode
      body.dataset.darkTheme = theme.css.darkTheme
      body.dataset.lightTheme = theme.css.lightTheme
    }
  }, [theme])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>GitHub Documentation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* The value in these "/cb-xxxxx" prefixes aren't important. They
            just need to be present. They help the CDN cache the asset
            for infinity.
            Just remember, if you edit these images on disk, remember to
            change these numbers
         */}
        <link rel="alternate icon" type="image/png" href="/assets/cb-600/images/site/favicon.png" />
        <link rel="icon" type="image/svg+xml" href="/assets/cb-803/images/site/favicon.svg" />

        <meta
          name="google-site-verification"
          content="OgdQc0GZfjDI52wDv1bkMT-SLpBUo_h5nn9mI9L22xQ"
        />
        <meta
          name="google-site-verification"
          content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY"
        />
      </Head>
      <SSRProvider>
        <ThemeProvider
          colorMode={theme.component.colorMode}
          dayScheme={theme.component.dayScheme}
          nightScheme={theme.component.nightScheme}
          preventSSRMismatch
        >
          <LanguagesContext.Provider value={languagesContext}>
            <Component {...pageProps} />
          </LanguagesContext.Provider>
        </ThemeProvider>
      </SSRProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const req: any = ctx.req

  // Have to define the type manually here because `req.context.languages`
  // comes from Node JS and is not type-aware.
  const languages: LanguagesContextT = req.context.languages

  return {
    ...appProps,
    languagesContext: { languages },
  }
}

export default MyApp
