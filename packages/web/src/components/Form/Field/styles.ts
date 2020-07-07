import { css } from '@emotion/core';
import { ThemeConfig } from '../../../theme';

export const field = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const label = css`
  margin-bottom: 8px;
  font-size: 14px;
`;

export const input = (theme: ThemeConfig) => css`
  flex: 1;
  padding: 12px 24px;
  font-size: 16px;
  color: ${theme.colors.text.input};
  background: ${theme.colors.bg.input};
  border: none;
  border-radius: 6px;

  &::placeholder {
    color: ${theme.colors.text.inputPlaceholder};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const select = (theme: ThemeConfig) => css`
  ${input(theme)}

  appearance: none;
`;
