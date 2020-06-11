import { EntityRepository, AbstractRepository } from 'typeorm';
import { Optional } from '@ecoleta/core';
import { CollectionPointEntity, CollectionPointItemEntity } from '../models';

@EntityRepository(CollectionPointEntity)
export class CollectionPointRepository extends AbstractRepository<
  CollectionPointEntity
> {
  async save(point: CollectionPointEntity, itemsId: number[]) {
    await this.manager.transaction(async (entities) => {
      await entities.save(point);

      const pointItems = itemsId.map((itemId) => {
        return new CollectionPointItemEntity({
          collectionPointId: point.id,
          wasteItemId: itemId,
        });
      });

      await entities.save(pointItems);
    });
  }

  async hasDuplicated(point: CollectionPointEntity) {
    const found = await this.manager
      .createQueryBuilder(CollectionPointEntity, 'point')
      .where('point.email = :email', { email: point.email })
      .getOne();

    return !!found;
  }

  async findById(id: number) {
    const point = await this.manager.findOne(CollectionPointEntity, id);

    return Optional(point);
  }

  async getItems(point: CollectionPointEntity) {
    const pointItems = await this.manager
      .createQueryBuilder(CollectionPointItemEntity, 'pointItem')
      .where('pointItem.collectionPointId = :id', { id: point.id })
      .innerJoinAndSelect('pointItem.wasteItem', 'wasteItem')
      .getMany();

    return pointItems.map((pointItem) => pointItem.wasteItem);
  }
}
