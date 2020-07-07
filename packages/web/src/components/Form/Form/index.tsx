/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PropsWithChildren, FormHTMLAttributes } from 'react';
import * as styles from './styles';

type FormProps = PropsWithChildren<{
  title?: string;
}> &
  FormHTMLAttributes<any>;

export const Form = (props: FormProps) => {
  const { title, children, ...otherProps } = props;

  return (
    <form {...otherProps}>
      {title && <h1 css={styles.title}>{title}</h1>}
      {children}
    </form>
  );
};
