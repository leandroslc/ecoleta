import { css } from '@emotion/core';

export const buttonContainer = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 48px;
`;

export const mapContainer = css`
  width: 100%;
  height: 350px;
  margin-bottom: 24px;
  border-radius: 8px;
`;

export const itemsContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;
`;
