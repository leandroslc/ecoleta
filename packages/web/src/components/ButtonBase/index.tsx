/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import {
  forwardRef,
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';
import { jsx } from 'theme-ui';
import styles from './styles';

interface InternalButtonBaseProps {
  component?: string;
  type?: string;
  children: ReactNode;
}

type BaseAnchorButtonProps = InternalButtonBaseProps &
  Omit<AnchorHTMLAttributes<any>, 'type'>;

type BaseNativeButtonProps = InternalButtonBaseProps &
  Omit<ButtonHTMLAttributes<any>, 'type'>;

export type ButtonBaseProps = Partial<
  BaseAnchorButtonProps & BaseNativeButtonProps
>;

export const ButtonBase = forwardRef<unknown, ButtonBaseProps>((props, ref) => {
  const { component = 'button', children, ...otherProps } = props;

  let Element: any = component;

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
