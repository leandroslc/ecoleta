/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import ThemeToggle from '../ThemeToggle';
import logoImg from '../../assets/logo.svg';
import styles from './styles';

export const Header: FC = (props) => {
  return (
    <header css={styles.header}>
      <div css={styles.brand}>
        <img src={logoImg} alt="Logo do Ecoleta" />
        <h1 css={styles.brandTitle}>Ecoleta</h1>
      </div>
      <nav css={styles.navigation}>
        {props.children && (
          <div css={styles.navigationItem}>{props.children}</div>
        )}
        <div css={styles.navigationItem}>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
