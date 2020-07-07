/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons/lib';
import { AnyComponentType, PropsWithAnyComponent } from '../../../utils/types';
import * as styles from './styles';

type LinkProps<T> = PropsWithAnyComponent<
  T,
  PropsWithChildren<{
    icon?: IconType;
  }>
>;

export const LinkButton = <T extends AnyComponentType>(props: LinkProps<T>) => {
  const { as = 'a', icon, children, ...otherProps } = props;

  const Element = as;

  let buttonIcon;

  if (icon) {
    const Icon = icon;
    buttonIcon = <Icon css={styles.icon} aria-hidden="true" />;
  }

  return (
    <Element css={styles.link} {...otherProps}>
      {buttonIcon}
      <span css={styles.text}>{children}</span>
    </Element>
  );
};

LinkButton.displayName = 'LinkButton';
