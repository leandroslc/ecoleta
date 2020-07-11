import { css } from '@emotion/core';
import { ThemeConfig } from '../../theme';

const containerBase = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 180px;
  padding: 32px 24px 16px;
  text-align: center;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-radius: 8px;
  transition: background-color 0.2s, border-color 0.2s;
`;

export const container = (theme: ThemeConfig) => css`
  ${containerBase}

  background-color: ${theme.colors.bg.item};
  border-color: ${theme.colors.bg.item};
`;

export const containerSelected = (theme: ThemeConfig) => css`
  ${containerBase}

  background-color: ${theme.colors.theme.lightPrimary};
  border-color: ${theme.colors.theme.primary};
`;

export const title = (theme: ThemeConfig) => css`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: 12px;
  color: ${theme.colors.text.title};
`;
