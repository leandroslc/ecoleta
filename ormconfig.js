/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const ApiProject = 'packages/api';
const Schemas = `./src/database/schemas/*.ts`;
const databasePath = (name) => `./${ApiProject}/database/${name}`;
const migrations = (name) => path.join(databasePath(name), 'migrations');
const databaseFile = (name) => path.join(databasePath(name), 'db.sqlite');

module.exports = [
  {
    name: 'development',
    type: 'sqlite',
    database: databaseFile('dev'),
    migrations: [`${migrations('dev')}/*.ts`],
    entities: [Schemas],
    cli: {
      migrationsDir: migrations('dev'),
    },
  },
  {
    name: 'test',
    type: 'sqlite',
    database: databaseFile('test'),
    entities: [Schemas],
    dropSchema: true,
  },
];
