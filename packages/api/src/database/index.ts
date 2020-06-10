import {
  getManager,
  createConnection as createDbConnection,
  ObjectType,
} from 'typeorm';
import { env } from '@ecoleta/core';

export function getEntityManager() {
  return getManager(env.name);
}

export function getRepository<T>(target: new () => T) {
  return getEntityManager().getRepository<T>(target);
}

export function getCustomRepository<T>(customRepository: ObjectType<T>) {
  return getEntityManager().getCustomRepository<T>(customRepository);
}

export async function createConnection() {
  return createDbConnection(env.name);
}
