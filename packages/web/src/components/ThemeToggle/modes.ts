import { FiMoon, FiSun } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';

interface ThemeMode {
  name: string;
  icon: IconType;
  title: string;
}

export default {
  default: {
    name: 'dark',
    icon: FiMoon,
    title: 'escuro',
  },
  dark: {
    name: 'default',
    icon: FiSun,
    title: 'claro',
  },
} as Record<string, ThemeMode>;
