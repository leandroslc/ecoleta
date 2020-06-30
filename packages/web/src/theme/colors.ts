// Default Theme
const defaultTheme = {
  theme: {
    primary: '#34cb79',
  },
  bg: {
    body: '#f0f0f5',
    themeToggle: '#322153',
  },
  text: {
    body: '#6c6c80',
    title: '#322153',
    themeToggle: '#f0f0f5',
  },
  color: {
    outline: 'rgb(0, 161, 255)',
  },
};

type ColorSchema = typeof defaultTheme;

// Dark Theme
const darkTheme: ColorSchema = {
  theme: {
    primary: '#34cb79',
  },
  bg: {
    body: '#454549',
    themeToggle: '#f0f0f5',
  },
  text: {
    body: '#f0f0f5',
    title: '#c7b2f0',
    themeToggle: '#322153',
  },
  color: {
    outline: 'rgb(0, 184, 255)',
  },
};

export default {
  ...defaultTheme,
  modes: {
    dark: darkTheme,
  },
};
