import { MigrationInterface, QueryRunner, Table } from 'typeorm';

let table: Table;

export class CreateCollectionPoints1591537222294 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    table = new Table({
      name: 'collection-points',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'image',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
        },
        {
          name: 'whatsapp',
          type: 'varchar',
        },
        {
          name: 'city',
          type: 'varchar',
        },
        {
          name: 'state',
          type: 'varchar',
          length: '2',
        },
        {
          name: 'latitude',
          type: 'decimal',
        },
        {
          name: 'longitude',
          type: 'decimal',
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(table);
  }
}
