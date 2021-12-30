import { ApolloClient, InMemoryCache, gql, NormalizedCacheObject } from "@apollo/client";
import Cookies from "js-cookie";

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && (window.__NEXT_DATA__ as any).apolloState;

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const getApolloClient = (forceNew: boolean) => {
  const token = (typeof window !== 'undefined') && Cookies.get('token');

  if (!apolloClient || forceNew) {
    apolloClient = new ApolloClient({
      ssrMode: isServer,
      uri: 'https://shibhope.hasura.app/v1/graphql',
      cache: new InMemoryCache().restore(windowApolloState || {}),
      headers: token ? { authorization: token } : {}
    });
  }

  return apolloClient;
}
