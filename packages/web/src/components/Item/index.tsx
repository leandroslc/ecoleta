/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as styles from './styles';

interface ItemProps {
  id: number;
  isSelected?: boolean;
  image: string;
  title: string;
  onItemSelected: (id: number) => void;
}

export const Item = (props: ItemProps) => {
  const { id, image, title, onItemSelected, isSelected = false } = props;

  const handleOnItemSelected = onItemSelected
    ? () => onItemSelected(id)
    : undefined;

  return (
    <li
      role="checkbox"
      aria-checked={isSelected}
      onClick={handleOnItemSelected}
      css={isSelected ? styles.containerSelected : styles.container}
    >
      <img src={image} alt={title} />
      <span css={styles.title}>{title}</span>
    </li>
  );
};
