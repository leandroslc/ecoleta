import { EntityRepository, AbstractRepository } from 'typeorm';
import { Optional } from '@ecoleta/core';
import { CollectionPointEntity, CollectionPointItemEntity } from '../models';

interface Search {
  city?: string;
  state?: string;
  itemsId?: number[];
}

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

  async search({ city, state, itemsId }: Search) {
    let query = this.manager
      .createQueryBuilder(CollectionPointEntity, 'point')
      .innerJoin(
        CollectionPointItemEntity,
        'pointItem',
        'pointItem.collectionPointId = point.id',
      )
      .where('pointItem.wasteItemId in (:...itemsId)', { itemsId })
      .orWhere('point.city = :city', { city })
      .orWhere('point.state = :state', { state })
      .select('point')
      .distinct();

    if (itemsId && itemsId.length > 0) {
      query = query.where('pointItem.wasteItemId in (:...itemsId)', {
        itemsId,
      });
    }

    if (city) {
      query = query.where('point.city = :city', { city });
    }

    if (state) {
      query = query.where('point.state = :state', { state });
    }

    return query.getMany();
  }
}
