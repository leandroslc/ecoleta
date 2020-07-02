/** @jsx jsx */
import { forwardRef, ComponentType } from 'react';
import { jsx } from 'theme-ui';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import styles from './styles';

interface InternalButtonProps {
  icon?: ComponentType;
}

type ButtonProps = InternalButtonProps & ButtonBaseProps;

export const Button = forwardRef<unknown, ButtonProps>((props, ref) => {
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
