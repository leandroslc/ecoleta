import { EntitySchema, getManager, createConnection } from 'typeorm';
import { env } from '@ecoleta/core';

export * from './entities/collection-point';
export * from './entities/collection-point-item';
export * from './entities/waste-item';

export function getEntityManager() {
  return getManager(env.name);
}

export function getRepository<T>(target: EntitySchema<T>) {
  return getEntityManager().getRepository(target);
}

export async function initializeDatabase() {
  await createConnection(env.name);
}
