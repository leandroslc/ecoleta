/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { forwardRef } from 'react';
import { jsx } from 'theme-ui';
import styles from './styles';

export const ButtonBase = forwardRef<unknown, any>((props, ref) => {
  const { component = 'button', children, ...otherProps } = props;

  let Element = component;

  if (component === 'button' && otherProps.href) {
    Element = 'a';
  }

  return (
    <Element ref={ref} css={styles.button} {...otherProps}>
      {children}
    </Element>
  );
});

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
