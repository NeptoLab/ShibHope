import type { AppProps } from "next/app";
import { extendTheme, NativeBaseProvider } from "native-base";
import { IntlProvider } from "react-intl";
import { ApolloProvider } from "@apollo/client";
import { useFonts } from "expo-font";
import { getApolloClient } from "utils/apollo";
import { Web3ReactProvider } from "@web3-react/core";
import { AbstractProvider } from 'web3-core';
import Web3 from "web3";
import Loading from "components/Loading";

const getLibrary = (provider: AbstractProvider) => {
  return new Web3(provider);
};

const theme = extendTheme({
  breakpoints: {
    base: 0,
    sm: 580,
    md: 992,
    lg: 1024,
    xl: 1280,
  },
  media: {
    "phone": "@media (max-width: 580px)",
    "tablet": "@media (min-width: 580px) and (max-width: 1024px)",
    "mobile": "@media (max-width: 1024px)",
    "desktop": "@media (min-width: 1024px)"
  },
  fontConfig: {
    MuseoSansCyrl: {
      100: {
        normal: 'MuseoSansCyrl-Thin',
        italic: 'MuseoSansCyrl-ThinItalic',
      },
      200: {
        normal: 'MuseoSansCyrl-Light',
        italic: 'MuseoSansCyrl-LightItalic',
      },
      300: {
        normal: 'MuseoSansCyrl-Light',
        italic: 'MuseoSansCyrl-LightItalic',
      },
      400: {
        normal: 'MuseoSansCyrl-Medium',
        italic: 'MuseoSansCyrl-MediumItalic',
      },
      500: {
        normal: 'MuseoSansCyrl-Medium',
      },
      600: {
        normal: 'MuseoSansCyrl-Medium',
        italic: 'MuseoSansCyrl-MediumItalic',
      },
      700: {
        normal: 'MuseoSansCyrl-Bold',
      },
      800: {
        normal: 'MuseoSansCyrl-Bold',
        italic: 'MuseoSansCyrl-BoldItalic',
      },
      900: {
        normal: 'MuseoSansCyrl-Heavy',
        italic: 'MuseoSansCyrl-HeavyItalic',
      },
    },
    },
    colors: {
      "primary": {
        50: "#6573FC", 
        100: "#6573FC", 
        200: "#6573FC", 
        300: "#6573FC", 
        400: "#6573FC", 
        500: "#6573FC", 
        600: "#6573FC", 
        700: "#6573FC", 
        800: "#6573FC", 
        900: "#6573FC", 
      }
    },
    components: {
      Input: {
        defaultProps: {
          fontSize: '16px' 
        }
      },
      Progress: {
        baseStyle: {
          bg: '#DADBDC',
          _filledTrack: {
            bg: '#6573FC'
          }
        }
      },
      Heading: {
        baseStyle: {
          fontWeight: '900',
          textAlign: 'center',
        }
      },
      Button: {
        defaultProps: {
          p: 0,
          rounded: 'lg',
        },
        baseStyle: {
          border: '1px solid red',
          _stack: {
            p: 4,
            bg: 'transparent'
          }
        },
        variants: {
          outline: {
            textTransform: 'uppercase',
            _text: {
              fontWeight: 'bold',
            }
          },
          glow: {
            _text: {
              color: '#464544',
              fontWeight: 'bold',
              fontSize: '18px',
              textTransform: 'uppercase',
            },
            _stack: {
              px: 4,
              py: 5,
              width: '100%',
              height: '100%',
              rounded: 'lg',
              justifyContent: 'center',
              bg: {
                linearGradient: {
                  colors: ["#FBF46D", "#FF865E"],
                  start: [0, 0],
                  end: [0, 1],
                },
              }
            }
          },
        },
      }
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'MuseoSansCyrl',
    body: 'MuseoSansCyrl',
    mono: 'MuseoSansCyrl',
  },
});

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  const client = getApolloClient(false);

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
    <ApolloProvider client={client}>
      <IntlProvider locale="en">
        <NativeBaseProvider config={config} theme={theme}>
          <Web3ReactProvider getLibrary={getLibrary}>
            {!fontsLoaded ? <Loading /> : (
              <Component {...pageProps} />
            )}
          </Web3ReactProvider>
        </NativeBaseProvider>
      </IntlProvider>
    </ApolloProvider>
  );
}

export default App;
