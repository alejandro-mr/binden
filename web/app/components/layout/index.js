import React from 'react';
import Link from 'next/link'
import Head from 'next/head'

import Header from '../header'
import Footer from '../footer'
import { LayoutContext } from './context'

export default ({ children, title = 'Binden', withHero = true }) => (
  <React.Fragment>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.0-rc.2/dist/css/foundation.min.css"
        integrity="sha256-iJQ8dZac/jUYHxiEnZJsyVpKcdq2sQvdA7t02QFmp30= sha384-SplqNBo/0ZlvSdwrP/riIPDozO5ck8+yIm++KVqyMAC53S6m3BaV+2OLpi7ULOOh sha512-ho6hK4sAWdCeqopNZWNy1d9Ok2hzfTLQLcGSr8ZlRzDzh6tNHkVoqSl6wgLsqls3yazwiG9H9dBCtSfPuiLRCQ=="
        crossorigin="anonymous" />
      <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/motion-ui@1.2.3/dist/motion-ui.min.css" />
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Galada|Montserrat" />
    </Head>
    <LayoutContext.Provider value={{ withHero }}>
      <Header />
    </LayoutContext.Provider>
    { children }
    <Footer />

    <style global jsx>{`
      body, html {
        background: rgb(245, 247, 248) !important;
        color: rgb(19, 10, 17);
        font-family: 'Montserrat', sans-serif;
        height: 100%;
      }

      main.content {
        padding-top: 1rem;
        padding-bottom: 2rem;
      }
    `}</style>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
      crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.0-rc.2/dist/js/foundation.min.js"
      integrity="sha256-G6jsRyH1fxbsvFIXSCuwYmI1aIDYBa28xscrvmYjJy0= sha384-vtoG68NvPc9azmFJr447vvY8qgdyA4FdaJ5/bqvzIM4eAdZfO0iyRRF8l2AAscYI sha512-43seCcNrHA0BQgrtyajB9sp8yOdv5c8QdYvgjP7zJ7v+dmzAcxYDQ2gupb9aztsNWBq1COIp/3NHYkQs4l/dkg=="
      crossorigin="anonymous"></script>
    <script>
      $(document).foundation();
    </script>
  </React.Fragment>
)
