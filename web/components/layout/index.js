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
      <link rel="stylesheet" href="static/foundation/foundation.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/motion-ui@1.2.3/dist/motion-ui.min.css" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet" />
    </Head>
    <LayoutContext.Provider value={{ withHero }}>
      <Header />
    </LayoutContext.Provider>
    { children }
    <Footer />

    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Galada|Montserrat');

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

    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
      crossOrigin="anonymous"></script>
    <script src="../../static/foundation/foundation.min.js"></script>
    <script>$(document).foundation();</script>
  </React.Fragment>
)

const style= {
  background: '#5b6b74'
}
