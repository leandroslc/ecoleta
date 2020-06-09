import { EntitySchema, getManager, createConnection } from 'typeorm';
import { env } from '@ecoleta/core';

export function getEntityManager() {
  return getManager(env.name);
}

export function getRepository<T>(target: EntitySchema<T>) {
  return getEntityManager().getRepository(target);
}

export async function initializeDatabase() {
  await createConnection(env.name);
}
