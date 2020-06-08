/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const schemas = path.join('.', 'src', 'database', 'schemas', '*.ts');
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
    entities: [schemas],
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
    entities: [schemas],
    dropSchema: true,
    migrationsRun: true,
    synchronize: false,
  },
];
