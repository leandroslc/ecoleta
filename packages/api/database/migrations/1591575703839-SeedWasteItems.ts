import { MigrationInterface, QueryRunner } from 'typeorm';

const Entity = 'WasteItem';

export class SeedWasteItems1591575703839 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(Entity, [
      { id: 1, title: 'Lâmpadas', image: 'lampadas.svg' },
      { id: 2, title: 'Pilhas e Baterias', image: 'baterias.svg' },
      { id: 3, title: 'Papéis e Papelão', image: 'papeis-papelao' },
      { id: 4, title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
      { id: 5, title: 'Resíduos Orgânicos', image: 'organicos.svg' },
      { id: 6, title: 'Óleo de Cozinha', image: 'oleo.svg' },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(Entity, [1, 2, 3, 4, 5, 6]);
  }
}
