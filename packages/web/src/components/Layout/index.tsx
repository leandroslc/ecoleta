/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import * as styles from './styles';

export const Layout: FC = (props) => {
  return <div css={styles.layout}>{props.children}</div>;
};
