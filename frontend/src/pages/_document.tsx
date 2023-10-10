import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const Document = (): JSX.Element => {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/company-logo.jpg" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <body className="antialiased selection:bg-indigo-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
