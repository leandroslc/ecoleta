// Default Theme
const defaultTheme = {
  theme: {
    primary: '#34cb79',
    lightPrimary: '#e1faec',
  },
  bg: {
    body: '#eeeef4',
    themeToggle: '#322153',
    button: '#34cb79',
    contentCard: '#fff',
    input: '#eeeef4',
    item: '#eeeef4',
    success: 'rgba(0, 0, 0, 0.7)',
    error: '#f5cfcf',
  },
  text: {
    body: '#6c6c80',
    title: '#322153',
    themeToggle: '#f0f0f5',
    button: '#fff',
    link: '#1c6af1',
    input: '#6c6c80',
    inputPlaceholder: '#a0a0b2',
    success: '#f5f5f5',
    error: '#680e0e',
  },
  color: {
    outline: 'rgba(29, 155, 209, 0.7)',
  },
};

type ColorSchema = typeof defaultTheme;

// Dark Theme
const darkTheme: ColorSchema = {
  theme: {
    primary: '#34cb79',
    lightPrimary: '#57685e',
  },
  bg: {
    body: '#454549',
    themeToggle: '#f0f0f5',
    button: '#34cb79',
    contentCard: '#5c5c61',
    input: '#454549',
    item: '#63637a',
    success: 'rgba(0, 0, 0, 0.7)',
    error: '#915d5d',
  },
  text: {
    body: '#f0f0f5',
    title: '#c7b2f0',
    themeToggle: '#322153',
    button: '#fff',
    link: '#aac1ff',
    input: '#b6b6cc',
    inputPlaceholder: '#7e7e88',
    success: '#f5f5f5',
    error: '#ffeceb',
  },
  color: {
    outline: 'rgba(44, 170, 224, 0.8)',
  },
};

export default {
  ...defaultTheme,
  modes: {
    dark: darkTheme,
  },
};
