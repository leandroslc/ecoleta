import { EntityRepository, AbstractRepository } from 'typeorm';
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
}
