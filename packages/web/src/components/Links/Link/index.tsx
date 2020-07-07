/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PropsWithChildren } from 'react';
import { AnyComponentType, PropsWithAnyComponent } from '../../../utils/types';
import * as styles from './styles';

type LinkProps<T> = PropsWithAnyComponent<T, PropsWithChildren<{}>>;

export const Link = <T extends AnyComponentType>(props: LinkProps<T>) => {
  const { as = 'a', children, ...otherProps } = props;

  const Element: any = as;

  return (
    <Element css={styles.link} {...otherProps}>
      {children}
    </Element>
  );
};

Link.displayName = 'Link';
