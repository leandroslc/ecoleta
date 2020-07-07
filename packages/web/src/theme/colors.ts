// Default Theme
const defaultTheme = {
  theme: {
    primary: '#34cb79',
  },
  bg: {
    body: '#eeeef4',
    themeToggle: '#322153',
    button: '#34cb79',
    contentCard: '#fff',
    input: '#eeeef4',
  },
  text: {
    body: '#6c6c80',
    title: '#322153',
    themeToggle: '#f0f0f5',
    button: '#fff',
    link: '#1c6af1',
    input: '#6c6c80',
    inputPlaceholder: '#a0a0b2',
  },
  color: {
    outline: 'rgba(0, 161, 255, 0.6)',
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
    button: '#34cb79',
    contentCard: '#5c5c61',
    input: '#454549',
  },
  text: {
    body: '#f0f0f5',
    title: '#c7b2f0',
    themeToggle: '#322153',
    button: '#fff',
    link: '#aac1ff',
    input: '#b6b6cc',
    inputPlaceholder: '#7e7e88',
  },
  color: {
    outline: 'rgba(0, 184, 255, 0.8)',
  },
};

export default {
  ...defaultTheme,
  modes: {
    dark: darkTheme,
  },
};
