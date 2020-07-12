import { css } from '@emotion/core';
import { ThemeConfig } from '../../../theme';

export const container = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  padding: 16px;
  margin: 24px 0;
  background: ${theme.colors.bg.error};
`;

export const text = (theme: ThemeConfig) => css`
  color: ${theme.colors.text.error};
`;

export const icon = (theme: ThemeConfig) => css`
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  margin-right: 18px;
  color: ${theme.colors.text.error};
`;
