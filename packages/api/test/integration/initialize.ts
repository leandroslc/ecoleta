import { initializeDatabase } from '../../src/database';

let initialized = false;

export default async () => {
  if (!initialized) {
    await initializeDatabase();

    initialized = true;
  }
};
