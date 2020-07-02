import colors from './colors';

const theme = {
  colors,
};

export type ThemeConfig = typeof theme;

export * from './breakpoints';
export * from './ThemeProvider';

export default theme;
