import { EntitySchema } from 'typeorm';
import { CollectionPointItem } from '@ecoleta/core';

export const CollectionPointItemEntity = new EntitySchema<CollectionPointItem>({
  name: 'CollectionPointItem',
  tableName: 'CollectionPointItems',
  columns: {
    collectionPointId: {
      type: Number,
      primary: true,
    },
    wasteItemId: {
      type: Number,
      primary: true,
    },
  },
  relations: {
    collectionPoint: {
      type: 'many-to-one',
      target: 'CollectionPoint',
      joinColumn: {
        name: 'collectionPointId',
      },
    },
    wasteItem: {
      type: 'many-to-one',
      target: 'WasteItem',
      joinColumn: {
        name: 'wasteItemId',
      },
    },
  },
});
