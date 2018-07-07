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
      <link rel="stylesheet" href="../static/foundation.min.css" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet" />
    </Head>
    <LayoutContext.Provider value={{ withHero }}>
      <Header />
    </LayoutContext.Provider>
    { children }
    <Footer>
    </Footer>

    <style jsx>{`
      `}</style>
    <style global jsx>{`
@import url('https://fonts.googleapis.com/css?family=Galada|Montserrat');

      body, html {
        background: rgb(245, 247, 248) !important;
        color: rgb(19, 10, 17);
        height: 100%;
      }

      main.content {
        padding-top: 1rem;
        padding-bottom: 2rem;
      }
/* Small only */
@media screen and (max-width: 39.9375em) {
}

/* Medium and up */
@media screen and (min-width: 40em) {}

/* Medium only */
@media screen and (min-width: 40em) and (max-width: 63.9375em) {}

/* Large and up */
@media screen and (min-width: 64em) {}

/* Large only */
@media screen and (min-width: 64em) and (max-width: 74.9375em) {}
      `}</style>

  </React.Fragment>
)

const style= {
  background: '#5b6b74'
}
