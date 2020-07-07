/** @jsx jsx */
import { jsx } from 'theme-ui';
import { IconType } from 'react-icons/lib';
import ButtonBase, { ButtonBaseProps } from './ButtonBase';
import * as styles from './styles';
import { AnyComponentType } from '../../utils/types';

const paddings = {
  big: 24,
  medium: 16,
};

type ButtonProps<T extends AnyComponentType> = ButtonBaseProps<
  T,
  {
    icon?: IconType;
    size?: keyof typeof paddings;
  }
>;

export const Button = <T extends AnyComponentType>(props: ButtonProps<T>) => {
  const { as = 'button', children, icon, size = 'big', ...otherProps } = props;
  const padding = paddings[size];

  let buttonIcon;

  if (icon) {
    const Icon = icon;

    buttonIcon = (
      <i css={styles.iconContainer(padding)} aria-hidden="true">
        <Icon css={styles.icon} />
      </i>
    );
  }

  const asComponent: any = as;

  return (
    <ButtonBase as={asComponent} css={styles.button} {...otherProps}>
      {buttonIcon}
      <span css={styles.text(padding)}>{children}</span>
    </ButtonBase>
  );
};

Button.displayName = 'Button';
