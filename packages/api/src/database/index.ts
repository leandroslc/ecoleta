import {
  getConnection as getDbConnection,
  createConnections,
  EntitySchema,
} from 'typeorm';
import { env } from '@ecoleta/core';

createConnections();

export * from './schemas/collection-point';
export * from './schemas/collection-point-item';
export * from './schemas/waste-item';

export function getConnection() {
  return getDbConnection(env.name);
}

export function getRepository<T>(target: EntitySchema<T>) {
  return getConnection().manager.getRepository(target);
}
