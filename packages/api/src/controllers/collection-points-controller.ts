import { Request, Response } from 'express';
import {
  CreateCollectionPointCommand,
  CollectionPointShowResult,
  CollectionPointIndexResult,
} from '@ecoleta/core';
import { getCustomRepository } from '../database';
import { CollectionPointRepository } from '../repositories';
import stringUtil from '../util/string';
import { CollectionPointEntity } from '../models';
import url from '../util/url';
import constants from '../config/constants';

function getImageUrl(request: Request, point: CollectionPointEntity) {
  return url.resolve(request, constants.UploadPointsImagesPath, point.image);
}

export class CollectionPointsController {
  async index(request: Request, response: Response) {
    const repository = getCustomRepository(CollectionPointRepository);

    const command = {
      city: request.query.city?.toString(),
      state: request.query.state?.toString(),
      items: request.query.items?.toString(),
    };

    const itemsId = stringUtil
      .toArray(command.items)
      .map((itemId) => Number(itemId));

    const points = await repository.search({
      ...command,
      itemsId,
    });

    const results = points.map((point) => {
      return {
        ...point,
        imageUrl: getImageUrl(request, point),
      } as CollectionPointIndexResult;
    });

    return response.status(200).json(results);
  }

  async show(request: Request, response: Response) {
    const repository = getCustomRepository(CollectionPointRepository);

    const { id } = request.params;

    const foundPoint = await repository.findById(Number(id));

    if (!foundPoint.hasValue) {
      return response.status(404).json({ message: 'Point not found' });
    }

    const point = foundPoint.value;
    const items = await repository.getItems(point);
    const imageUrl = getImageUrl(request, point);

    return response
      .status(200)
      .json(new CollectionPointShowResult(point, items, imageUrl));
  }

  async create(request: Request, response: Response) {
    const repository = getCustomRepository(CollectionPointRepository);

    const command: CreateCollectionPointCommand = {
      ...request.body,
    };

    const itemsId = stringUtil
      .toArray(command.items)
      .map((itemId) => Number(itemId));

    const point = new CollectionPointEntity({
      ...command,
      image: request.file.filename,
    });

    if (await repository.hasDuplicated(point)) {
      return response.status(409).json({
        message: `Collection point with email ${point.email} already exists`,
      });
    }

    await repository.save(point, itemsId);

    return response.status(201).json(point);
  }
}
