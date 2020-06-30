import { css } from '@emotion/core';

export const header = css`
  display: flex;
  align-items: center;
  padding: 48px 30px;
`;

export const brand = css`
  display: flex;
  align-items: center;
`;

export const brandTitle = css`
  margin-left: 20px;
  font-size: 32px;
`;

export const navigation = css`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export default {
  header,
  brand,
  brandTitle,
  navigation,
};
