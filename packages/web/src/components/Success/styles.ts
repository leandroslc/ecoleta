import { css } from '@emotion/core';
import { ThemeConfig } from '../../theme';

export const success = (theme: ThemeConfig) => css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.bg.success};
`;

export const successIcon = (theme: ThemeConfig) => css`
  width: 72px;
  height: 72px;
  color: ${theme.colors.theme.primary};
`;

export const successText = (theme: ThemeConfig) => css`
  margin-top: 24px;
  font-size: 24px;
  color: ${theme.colors.text.success};
`;
