/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { forwardRef } from 'react';
import { jsx } from 'theme-ui';
import ButtonBase from './ButtonBase';
import * as styles from './styles';

export const Button = forwardRef<unknown, any>((props, ref) => {
  const { children, icon, ...otherProps } = props;

  let buttonIcon;

  if (icon) {
    const Icon = icon;

    buttonIcon = (
      <i css={styles.iconContainer} aria-hidden="true">
        <Icon css={styles.icon} />
      </i>
    );
  }

  return (
    <ButtonBase ref={ref} css={styles.button} {...otherProps}>
      {buttonIcon}
      <span css={styles.text}>{children}</span>
    </ButtonBase>
  );
});

Button.displayName = 'Button';
