import { css } from '@emotion/core';
import { ThemeConfig } from '../../theme/index';

export const button = (theme: ThemeConfig) => css`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 360px;
  padding: 0;
  overflow: hidden;
  color: ${theme.colors.text.button};
  text-decoration: none;
  background-color: ${theme.colors.bg.button};
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: #2fb86e;
    transition: background-color 0.2s;
  }
`;

export const iconContainer = (padding: number) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${padding}px calc(${padding}px * 1.33);
  background-color: rgba(0, 0, 0, 0.08);
`;

export const icon = css`
  width: 20px;
  height: 20px;
`;

export const text = (padding: number) => css`
  flex: 1;
  padding: ${padding}px 0;
  text-align: center;
`;
