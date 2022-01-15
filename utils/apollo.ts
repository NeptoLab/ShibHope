import { ApolloClient, InMemoryCache } from "@apollo/client";
import Cookies from "js-cookie";

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && (window.__NEXT_DATA__ as any).apolloState;

export const getApolloClient = () => {
  const token = (typeof window !== 'undefined') && Cookies.get('token');

  return new ApolloClient({
    ssrMode: isServer,
    uri: 'https://shibhope.hasura.app/v1/graphql',
    cache: new InMemoryCache().restore(windowApolloState || {}),
    headers: token ? { authorization: token } : {}
  });
};

