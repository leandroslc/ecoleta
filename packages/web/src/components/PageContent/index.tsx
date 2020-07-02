/** @jsx jsx */
import { FC, PropsWithChildren } from 'react';
import { jsx } from 'theme-ui';
import styles from './styles';

type PageContentProps = PropsWithChildren<{
  type?: 'card';
}>;

export const PageContent: FC<PageContentProps> = (props) => {
  const { children, type } = props;

  let childComponent = children;

  if (type === 'card') {
    childComponent = <div css={styles.contentCard}>{children}</div>;
  }

  return <main css={styles.content}>{childComponent}</main>;
};
