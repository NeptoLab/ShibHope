import React from 'react';
import cookie from 'cookie';
import NextDocument from '@expo/next-adapter/document';
import { flush } from 'react-native-media-query';
import { Head, Main, NextScript, Html } from 'next/document';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { getApolloClient } from 'utils/apollo';

class MyDocument extends NextDocument {
  constructor(props: any) {
    super(props);
    const { __NEXT_DATA__, apolloState } = props;
    __NEXT_DATA__.apolloState = apolloState;
  }

  static async getInitialProps(ctx: any) {
    // console.log(cookie.parse(ctx?.req?.headers?.cookie || ''));
    const apolloClient = getApolloClient(true);
    await getDataFromTree(<ctx.AppTree {...ctx.appProps} />);
    const initialProps = await NextDocument.getInitialProps(ctx);
    const apolloState = apolloClient.extract();
    return { ...initialProps, apolloState, styles: [ ...initialProps.styles, flush() ] };
  }

  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="description" content="SHIBHOPE: Crowfunding charity platform" />
          <meta name="keywords" content="charity, projects, social, justice, shiba" />
          <link rel="icon" href="images/favicon.png" type="image/png" />
          <style dangerouslySetInnerHTML={{ __html: 'html { height: 100%; } body { background: #F7F8F9; height: 100%; } #__next { display:flex; height:100%; }' }} />
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
