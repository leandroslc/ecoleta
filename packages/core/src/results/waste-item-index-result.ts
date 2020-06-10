export class WasteItemIndexResult {
  title: string;

  imageUrl: string;

  constructor({ title, imageUrl }: WasteItemIndexResult) {
    this.title = title;
    this.imageUrl = imageUrl;
  }
}
