import { css } from '@emotion/core';
import { ThemeConfig } from '../../theme';

export const container = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin-top: 48px;
  background: ${theme.colors.theme.lightPrimary};
  border-radius: 10px;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const empty = (theme: ThemeConfig) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  color: ${theme.colors.text.body};
  border: 1px dashed ${theme.colors.theme.primary};
  border-radius: 10px;
`;

export const emptyIcon = (theme: ThemeConfig) => css`
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
  color: ${theme.colors.theme.primary};
`;
