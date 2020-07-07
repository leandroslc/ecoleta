/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PropsWithChildren } from 'react';
import * as styles from './styles';

type FieldGroupProps = PropsWithChildren<{}>;

export const FieldGroup = (props: FieldGroupProps) => {
  const { children } = props;

  return <div css={styles.fieldGroup}>{children}</div>;
};
