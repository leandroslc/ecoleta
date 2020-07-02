import { css } from '@emotion/core';
import { ThemeConfig } from '../../theme';

export const link = (theme: ThemeConfig) => css`
  color: ${theme.colors.text.link};
  text-decoration: none;
  border-bottom: 1px solid currentColor;
`;

export default {
  link,
};
