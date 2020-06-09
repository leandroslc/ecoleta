import { CollectionPoint, WasteItem } from '..';

export interface CollectionPointItem {
  collectionPointId: number;
  wasteItemId: number;
  collectionPoint?: CollectionPoint;
  wasteItem?: WasteItem;
}
