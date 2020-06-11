import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { CollectionPointItem, CollectionPoint, WasteItem } from '@ecoleta/core';
import { CollectionPointEntity, WasteItemEntity } from '.';

@Entity('collection-point-items')
export class CollectionPointItemEntity implements CollectionPointItem {
  @PrimaryColumn()
  collectionPointId!: number;

  @PrimaryColumn()
  wasteItemId!: number;

  @ManyToOne((_type) => CollectionPointEntity)
  collectionPoint!: CollectionPoint;

  @ManyToOne((_type) => WasteItemEntity)
  wasteItem!: WasteItem;

  constructor(pointItem?: CollectionPointItem) {
    Object.assign(this, pointItem);
  }
}
