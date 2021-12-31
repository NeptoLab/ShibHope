import React from 'react';
import { LinkProps } from 'next/link';
import { useRouter } from 'utils/router';

const Link: React.FC<LinkProps> = ({ passHref, href, as, children, ...restProps }) => {
  const router = useRouter();

  const child = React.Children.only(children);
  const newProps = {
    ...(passHref ? { href: as || href } : {}),
    accessibilityRole: 'link',
    onPress: (e: React.SyntheticEvent) => {
      e.preventDefault();

      if (as === "_blank") {
        window.open(href as string);
        return;
      }

      router.push(href as string, as as string, restProps);
    }
  };
  return React.cloneElement(child as React.ReactElement, newProps);
};

Link.displayName = 'Link';

export default Link;
