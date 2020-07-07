/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PropsWithChildren, FieldsetHTMLAttributes } from 'react';
import * as styles from './styles';

type FieldSetProps = PropsWithChildren<{
  legend?: string;
  help?: string;
}> &
  FieldsetHTMLAttributes<any>;

export const FieldSet = (props: FieldSetProps) => {
  const { legend, help, children, ...otherProps } = props;

  const legendElement = legend ? (
    <h2 css={styles.legendTitle}>{legend}</h2>
  ) : undefined;

  const helpElement = help ? (
    <span css={styles.legendHelp}>{help}</span>
  ) : undefined;

  const hasLegend = !!legendElement || !!helpElement;

  return (
    <fieldset css={styles.fieldset} {...otherProps}>
      {hasLegend && (
        <legend css={styles.legend}>
          {legendElement}
          {helpElement}
        </legend>
      )}
      {children}
    </fieldset>
  );
};
