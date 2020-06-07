import { EntitySchema, getManager, createConnection } from 'typeorm';
import { env } from '@ecoleta/core';

export * from './schemas/collection-point';
export * from './schemas/collection-point-item';
export * from './schemas/waste-item';

export function getRepository<T>(target: EntitySchema<T>) {
  return getManager(env.name).getRepository(target);
}

export async function initializeDatabase() {
  await createConnection(env.name);
}
