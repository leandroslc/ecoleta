// Default Theme
const defaultTheme = {
  theme: {
    primary: '#34cb79',
  },
  bg: {
    body: '#f0f0f5',
    themeToggle: '#322153',
    button: '#34cb79',
  },
  text: {
    body: '#6c6c80',
    title: '#322153',
    themeToggle: '#f0f0f5',
    button: '#fff',
    link: '#1c6af1',
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
    button: '#34cb79',
  },
  text: {
    body: '#f0f0f5',
    title: '#c7b2f0',
    themeToggle: '#322153',
    button: '#fff',
    link: '#aac1ff',
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
