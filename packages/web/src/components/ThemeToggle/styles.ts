import { css } from '@emotion/core';
import { ThemeConfig } from '../../theme';

export const themeToggle = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  padding: 8px;
  color: ${theme.colors.text.themeToggle};
  background-color: ${theme.colors.bg.themeToggle};
  border: none;
  border-radius: 50%;
`;

export const themeToggleIcon = css`
  width: 20px;
  height: auto;
`;

export default {
  themeToggle,
  themeToggleIcon,
};
