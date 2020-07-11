/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import { WasteItemIndexResult } from '@ecoleta/core';
import { Item } from '../../components';
import api from '../../services/api';
import * as styles from './styles';

interface ItemsProps {
  selectedItemsId: number[];
  setSelectedItemsId: (itemsId: number[]) => void;
}

const Items = (props: ItemsProps) => {
  const { selectedItemsId, setSelectedItemsId } = props;

  const [items, setItems] = useState<WasteItemIndexResult[]>([]);

  useEffect(() => {
    api.items().then((response) => {
      setItems(response.data);
    });
  }, []);

  function handleItemSelection(itemId: number) {
    const isSelected = selectedItemsId.findIndex((id) => id === itemId) >= 0;

    if (isSelected) {
      setSelectedItemsId(selectedItemsId.filter((id) => id !== itemId));
    } else {
      setSelectedItemsId([...selectedItemsId, itemId]);
    }
  }

  return (
    <ul css={styles.itemsContainer}>
      {items.map((item) => {
        const isSelected = selectedItemsId.includes(item.id);

        return (
          <Item
            key={item.id}
            id={item.id}
            image={item.imageUrl}
            title={item.title}
            isSelected={isSelected}
            onItemSelected={handleItemSelection}
          />
        );
      })}
    </ul>
  );
};

export default Items;
