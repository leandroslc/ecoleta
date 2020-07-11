/** @jsx jsx */
import { jsx } from 'theme-ui';
import { IconType } from 'react-icons/lib';
import * as styles from './styles';

interface SuccessProps {
  icon?: IconType;
  message: string;
}

export const Success = (props: SuccessProps) => {
  const { icon, message } = props;

  let successIcon;

  if (icon) {
    const Icon = icon;

    successIcon = <Icon css={styles.successIcon} aria-hidden="true" />;
  }

  return (
    <div css={styles.success}>
      {successIcon}
      <span css={styles.successText}>{message}</span>
    </div>
  );
};
