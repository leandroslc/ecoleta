import React, { FC } from 'react';
import { ThemeProvider as BaseThemeProvider } from 'theme-ui';
import { Global } from '@emotion/core';
import globalStyles from './global';
import theme from '.';

export const ThemeProvider: FC = ({ children }) => {
  return (
    <BaseThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </BaseThemeProvider>
  );
};
