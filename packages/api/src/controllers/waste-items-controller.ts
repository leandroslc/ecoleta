import { Request, Response } from 'express';
import { WasteItemIndexResult } from '@ecoleta/core';
import { getRepository } from '../database';
import { WasteItemEntity } from '../models';
import constants from '../config/constants';
import url from '../util/url';

export class WasteItemsController {
  async index(request: Request, response: Response) {
    const repositpry = getRepository(WasteItemEntity);

    const items = await repositpry.find();

    const result = items.map((item) => {
      return <WasteItemIndexResult>{
        ...item,
        imageUrl: url.resolve(
          request,
          constants.StaticItemsImagesPath,
          item.image,
        ),
      };
    });

    return response.json(result);
  }
}
