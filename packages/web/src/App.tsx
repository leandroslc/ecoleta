import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'theme-ui';
import Home from './pages/Home';
import { Layout } from './components';
import theme from './theme';
import global from './theme/global';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
