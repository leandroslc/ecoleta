export class WasteItemIndexResult {
  id: number;
  title: string;
  imageUrl: string;

  constructor({ id, title, imageUrl }: WasteItemIndexResult) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
  }
}
