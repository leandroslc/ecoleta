/** @jsx jsx */
import { FC, MouseEvent } from 'react';
import { jsx, useColorMode } from 'theme-ui';
import modes from './modes';
import styles from './styles';

function getThemeMode(currentMode: string) {
  return modes[currentMode];
}

const ThemeToggle: FC = () => {
  const [colorMode, setColorMode] = useColorMode();

  function handleColorModeClick(event: MouseEvent) {
    event.preventDefault();

    const mode = getThemeMode(colorMode);

    setColorMode(mode.name);
  }

  const mode = getThemeMode(colorMode);
  const Icon = mode.icon;

  return (
    <button
      css={styles.themeToggle}
      onClick={(e) => handleColorModeClick(e)}
      title={`Alternar para o modo ${mode.title}`}
    >
      <Icon css={styles.themeToggleIcon} />
    </button>
  );
};

export default ThemeToggle;
