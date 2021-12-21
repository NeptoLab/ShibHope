import { ApolloClient, InMemoryCache, gql, NormalizedCacheObject } from "@apollo/client";

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && (window.__NEXT_DATA__ as any).apolloState;

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const getApolloClient = (forceNew: boolean) => {
  if (!apolloClient || forceNew) {
    apolloClient = new ApolloClient({
      ssrMode: isServer,
      uri: 'https://shibhope.hasura.app/v1/graphql',
      cache: new InMemoryCache().restore(windowApolloState || {}),
    });
  }

  return apolloClient;
}
