import { css } from '@emotion/core';
import { ThemeConfig } from '.';

export default (theme: ThemeConfig) => css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@700&display=swap');

  * {
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 3px 3px ${theme.colors.color.outline};
    transition: box-shadow 0.2s;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.text.body};
    background: ${theme.colors.bg.body};
    -webkit-font-smoothing: antialiased;
  }

  input,
  button,
  textarea {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Ubuntu, sans-serif;
    color: ${theme.colors.text.title};
  }

  button {
    cursor: pointer;
  }
`;
