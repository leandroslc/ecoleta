import { EntitySchema } from 'typeorm';
import { WasteItem } from '@ecoleta/core';

export const WasteItemEntity = new EntitySchema<WasteItem>({
  name: 'WasteItem',
  tableName: 'WasteItems',
  columns: {
    id: {
      type: Number,
      primary: true,
    },
    title: {
      type: String,
    },
    image: {
      type: String,
    },
  },
});
