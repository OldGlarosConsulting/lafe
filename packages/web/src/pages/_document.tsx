import React from 'react';

import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <script src="https://cdn.jsdelivr.net/npm/apexcharts" />
          <script src="https://cdn.jsdelivr.net/npm/react-apexcharts" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
