import { MigrationInterface, QueryRunner, Table } from 'typeorm';

let table: Table;

export class CreateWasteItems1591537269930 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    table = new Table({
      name: 'waste-items',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: false,
        },
        {
          name: 'title',
          type: 'varchar',
        },
        {
          name: 'image',
          type: 'varchar',
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(table);
  }
}
