/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const entities = path.join('.', 'src', 'database', 'entities', '*.ts');
const databaseDir = path.join('.', 'database');
const migrationsDir = path.join(databaseDir, 'migrations');
const migrations = path.join(migrationsDir, '*.ts');
const databaseFile = (name) => path.join(databaseDir, `db-${name}.sqlite`);

module.exports = [
  {
    name: 'development',
    type: 'sqlite',
    database: databaseFile('dev'),
    migrations: [migrations],
    entities: [entities],
    synchronize: false,
    cli: {
      migrationsDir,
    },
  },
  {
    name: 'test',
    type: 'sqlite',
    database: databaseFile('test'),
    migrations: [migrations],
    entities: [entities],
    dropSchema: true,
    migrationsRun: true,
    synchronize: false,
  },
];
