/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { PropsWithChildren } from 'react';
import { jsx } from 'theme-ui';
import { AnyComponentType, PropsWithAnyComponent } from '../../../utils/types';
import * as styles from './styles';

export type ButtonBaseProps<T, U = {}> = PropsWithAnyComponent<
  T,
  PropsWithChildren<U>
>;

export const ButtonBase = <T extends AnyComponentType>(
  props: ButtonBaseProps<T>,
) => {
  const { as, children, ...otherProps } = props;

  let Element: any = as;

  const anyOtherProps: any = otherProps;

  if (as === 'button' && anyOtherProps.href) {
    Element = 'a';
  }

  return (
    <Element css={styles.button} {...otherProps}>
      {children}
    </Element>
  );
};

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
