import { css } from '@emotion/core';
import { bq } from '../../theme';

export const container = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  @media (max-width: ${bq('sm')}) {
    flex-direction: column;
  }
`;

export const descriptionContainer = css`
  display: flex;
  flex: 0 1 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 560px;
`;

export const imageContainer = css`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 12px;
`;

export const title = css`
  margin-bottom: 24px;
  font-size: 54px;
`;

export const subTitle = css`
  margin-bottom: 48px;
  font-size: 24px;
  line-height: 38px;
`;

export default {
  container,
  descriptionContainer,
  imageContainer,
  title,
  subTitle,
};
