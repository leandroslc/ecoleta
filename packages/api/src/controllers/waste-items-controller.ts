import { Request, Response } from 'express';
import { getRepository } from '../database';
import { WasteItemEntity } from '../models';
import constants from '../config/constants';
import url from '../util/url';

export class WasteItemsController {
  async index(request: Request, response: Response) {
    const itemRepository = getRepository(WasteItemEntity);

    const items = await itemRepository.find();

    const serializedItems = items.map((item) => {
      return {
        title: item.title,
        imageUrl: url.resolve(
          request,
          `${constants.StaticItemsImagesPath}/${item.image}`,
        ),
      };
    });

    return response.json(serializedItems);
  }
}
