import React from 'react';
import NextDocument from '@expo/next-adapter/document';
import { Head, Main, NextScript, Html } from 'next/document';

class MyDocument extends NextDocument {
  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="description" content="SHIBHOPE: Crowfunding charity platform" />
          <meta name="keywords" content="charity, projects, social, justice, shiba" />
          <link rel="icon" href="images/favicon.png" type="image/png" />
          <title>ShibHope</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
