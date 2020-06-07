import { EntitySchema } from 'typeorm';
import { CollectionPoint } from '@ecoleta/core';

export const CollectionPointEntity = new EntitySchema<CollectionPoint>({
  name: 'CollectionPoint',
  tableName: 'CollectionPoints',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    email: {
      type: String,
    },
    whatsapp: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
      length: 2,
    },
    latitude: {
      type: 'decimal',
    },
    longitude: {
      type: 'decimal',
    },
  },
});
