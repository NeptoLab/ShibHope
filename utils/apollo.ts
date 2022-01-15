import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getDataFromTree } from '@apollo/client/react/ssr';
import Cookies from "js-cookie";
import withApollo from "next-with-apollo";

const isServer = typeof window === "undefined";

export default withApollo(({ initialState }) => {
  const token = (typeof window !== 'undefined') && Cookies.get('token');
  return new ApolloClient({
    ssrMode: isServer,
    uri: 'https://shibhope.hasura.app/v1/graphql',
    cache: new InMemoryCache(initialState).restore(initialState || {}),
    headers: token ? { authorization: token } : {}
  });
}, { getDataFromTree });
