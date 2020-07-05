import { css } from '@emotion/core';
import { ThemeConfig } from '../../theme';

export const content = css`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;

export const contentCard = (theme: ThemeConfig) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 730px;
  padding: 64px;
  margin: 0 auto;
  background-color: ${theme.colors.bg.contentCard};
  border-radius: 8px;
`;
