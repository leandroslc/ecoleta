import { CollectionPoint } from '..';

export interface CreateCollectionPointCommand
  extends Omit<CollectionPoint, 'id' | 'image'> {
  items: string;
}
