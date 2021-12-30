import querystring from 'querystring';
import url from 'url';
import type { NextRouter } from 'next/router';
import { useRoute, useNavigation } from '@react-navigation/native';

export const useRouter = (): NextRouter => {
  const route = useRoute();
  const navigation = useNavigation();

  const hasParams = route.params && Object.keys(route.params).length > 0;
  const query = route.params as querystring.ParsedUrlQuery || {};

  return {
    pathname: route.name,
    query,
    asPath: `${route.name}${hasParams ? `?${querystring.stringify(query)}` : ''}`,
    push: async (href: string) => {
      const { pathname, query } = url.parse(href, true);
      navigation.navigate(pathname as never, query as never);
      return true;
    },
    back: () => {
      navigation.goBack();
    }
  } as NextRouter;
};
