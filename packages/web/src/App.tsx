import React from 'react';
import { ThemeProvider } from './theme';
import Routes from './routes';

export const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
