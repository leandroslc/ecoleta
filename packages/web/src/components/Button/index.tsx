/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { IconType } from 'react-icons/lib';
import ButtonBase, { ButtonBaseProps } from './ButtonBase';
import * as styles from './styles';
import { AnyComponentType } from '../../utils/types';

export type ButtonProps<T> = ButtonBaseProps<
  T,
  {
    icon?: IconType;
  }
>;

export const Button = <T extends AnyComponentType>(props: ButtonProps<T>) => {
  const { as, children, icon, ...otherProps } = props;

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
    <ButtonBase as={as} css={styles.button} {...otherProps}>
      {buttonIcon}
      <span css={styles.text}>{children}</span>
    </ButtonBase>
  );
};

Button.displayName = 'Button';
