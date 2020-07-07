/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PropsWithChildren } from 'react';
import { AnyComponentType, PropsWithAnyComponent } from '../../../utils/types';
import * as styles from './styles';

type FieldProps<T extends AnyComponentType> = PropsWithAnyComponent<
  T,
  PropsWithChildren<{
    id?: string;
    label?: string;
  }>
>;

export const Field = <T extends AnyComponentType>(props: FieldProps<T>) => {
  const { as, label, id, children, ...otherProps } = props;

  const Element: any = as;

  const element =
    as === 'select' ? (
      <Element css={styles.select} id={id} {...otherProps}>
        {children}
      </Element>
    ) : (
      <Element css={styles.input} id={id} {...otherProps} />
    );

  return (
    <div css={styles.field}>
      {label && (
        <label css={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      {element}
    </div>
  );
};
