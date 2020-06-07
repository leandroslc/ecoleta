import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

let table: Table;
let collectionPointForeignKey: TableForeignKey;
let wasteItemForeignKey: TableForeignKey;

export class CreateCollectionPointItems1591541032159
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    table = new Table({
      name: 'CollectionPointItems',
      columns: [
        {
          name: 'collectionPointId',
          type: 'integer',
          isPrimary: true,
        },
        {
          name: 'wasteItemId',
          type: 'integer',
          isPrimary: true,
        },
      ],
    });

    collectionPointForeignKey = new TableForeignKey({
      columnNames: ['collectionPointId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'CollectionPoints',
    });

    wasteItemForeignKey = new TableForeignKey({
      columnNames: ['wasteItemId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'WasteItems',
    });

    await queryRunner.createTable(table);
    await queryRunner.createForeignKey(table, collectionPointForeignKey);
    await queryRunner.createForeignKey(table, wasteItemForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(table, collectionPointForeignKey);
    await queryRunner.dropForeignKey(table, wasteItemForeignKey);
    await queryRunner.dropTable(table);
  }
}
