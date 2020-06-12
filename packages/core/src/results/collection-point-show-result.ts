import { CollectionPoint, WasteItem } from '..';

type WasteItemResult = Pick<WasteItem, 'title'>;

export class CollectionPointShowResult implements CollectionPoint {
  id: number;

  name: string;

  image: string;

  email: string;

  whatsapp: string;

  city: string;

  state: string;

  latitude: number;

  longitude: number;

  items: WasteItemResult[];

  imageUrl: string;

  constructor(point: CollectionPoint, items: WasteItem[], imageUrl: string) {
    this.id = point.id;
    this.name = point.name;
    this.image = point.image;
    this.email = point.email;
    this.whatsapp = point.whatsapp;
    this.city = point.city;
    this.state = point.state;
    this.latitude = point.latitude;
    this.longitude = point.longitude;
    this.imageUrl = imageUrl;
    this.items = items.map((item) => <WasteItemResult>{ title: item.title });
  }
}
