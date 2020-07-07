import { css } from '@emotion/core';

export const fieldGroup = css`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 24px;
`;
