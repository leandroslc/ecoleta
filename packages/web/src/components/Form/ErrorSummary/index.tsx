/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import * as styles from './styles';

interface ErrorSummaryProps {
  message?: string;
}

export const ErrorSummary = (props: ErrorSummaryProps) => {
  const { message } = props;

  return (
    <React.Fragment>
      {message && (
        <div css={styles.container} role="presentation">
          <FiAlertTriangle css={styles.icon} aria-hidden="true" />
          <span css={styles.text}>{message}</span>
        </div>
      )}
    </React.Fragment>
  );
};
