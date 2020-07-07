import { css } from '@emotion/core';
import { ThemeConfig } from '../../../theme';

export const link = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  padding: 2px;
  color: ${theme.colors.text.body};
  text-decoration: none;
`;

export const icon = (theme: ThemeConfig) => css`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: ${theme.colors.theme.primary};
`;

export const text = css`
  border-bottom: 1px solid currentColor;
`;
