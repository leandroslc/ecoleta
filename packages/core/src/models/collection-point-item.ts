import { CollectionPoint, WasteItem } from '..';

export class CollectionPointItem {
  collectionPointId: number;

  wasteItemId: number;

  collectionPoint?: CollectionPoint;

  wasteItem?: WasteItem;

  constructor() {
    this.collectionPointId = 0;
    this.wasteItemId = 0;
  }
}
