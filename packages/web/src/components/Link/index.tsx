/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { forwardRef } from 'react';
import styles from './styles';

export const Link = forwardRef((props: any, ref) => {
  const { component = 'a', children, ...otherProps } = props;

  const Element: any = component;

  return (
    <Element ref={ref} css={styles.link} {...otherProps}>
      {children}
    </Element>
  );
});

Link.displayName = 'Link';
