import { AppProps } from "next/app";
import withApollo from 'utils/apollo';
import { extendTheme, NativeBaseProvider } from "native-base";
import { IntlProvider } from "react-intl";
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from "@apollo/client";
import { useFonts } from "expo-font";
import { Web3ReactProvider } from "@web3-react/core";
import { AbstractProvider } from 'web3-core';
import Web3 from "web3";
import Loading from "components/Loading";
import baseTheme from 'config/theme.json';

const getLibrary = (provider: AbstractProvider) => {
  return new Web3(provider);
};

const theme = extendTheme(baseTheme);

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

const App = ({ Component, pageProps, apollo }: AppProps & { apollo: ApolloClient<NormalizedCacheObject> }) => {
  const [fontsLoaded] = useFonts({
    'MuseoSansCyrl-Bold': require('fonts/MuseoSansCyrl-Bold.ttf').default,
    'MuseoSansCyrl-BoldItalic': require('fonts/MuseoSansCyrl-BoldItalic.ttf').default,
    'MuseoSansCyrl-Heavy': require('fonts/MuseoSansCyrl-Heavy.ttf').default,
    'MuseoSansCyrl-HeavyItalic': require('fonts/MuseoSansCyrl-HeavyItalic.ttf').default,
    'MuseoSansCyrl-Light': require('fonts/MuseoSansCyrl-Light.ttf').default,
    'MuseoSansCyrl-LightItalic': require('fonts/MuseoSansCyrl-LightItalic.ttf').default,
    'MuseoSansCyrl-Medium': require('fonts/MuseoSansCyrl-Medium.ttf').default,
    'MuseoSansCyrl-MediumItalic': require('fonts/MuseoSansCyrl-MediumItalic.ttf').default,
    'MuseoSansCyrl-Thin': require('fonts/MuseoSansCyrl-Thin.ttf').default,
    'MuseoSansCyrl-ThinItalic': require('fonts/MuseoSansCyrl-ThinItalic.ttf').default,
  });

  return (
    <ApolloProvider client={apollo}>
      <IntlProvider locale="en">
        <NativeBaseProvider config={config} theme={theme}>
          <Web3ReactProvider getLibrary={getLibrary}>
            {!fontsLoaded && typeof window !== 'undefined' ? <Loading /> : (
              <Component {...pageProps} />
            )}
          </Web3ReactProvider>
        </NativeBaseProvider>
      </IntlProvider>
    </ApolloProvider>
  );
}

export default withApollo(App);
