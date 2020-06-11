import { Request, Response } from 'express';
import {
  CreateCollectionPointCommand,
  CollectionPointShowResult,
} from '@ecoleta/core';
import { getCustomRepository } from '../database';
import { CollectionPointRepository } from '../repositories';
import stringUtil from '../util/string';
import { CollectionPointEntity } from '../models';

export class CollectionPointsController {
  async show(request: Request, response: Response) {
    const repository = getCustomRepository(CollectionPointRepository);

    const { id } = request.params;

    const point = await repository.findById(Number(id));

    if (!point.hasValue) {
      return response.status(404).json({ message: 'Point not found' });
    }

    const items = await repository.getItems(point.value);

    return response
      .status(200)
      .json(new CollectionPointShowResult(point.value, items));
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
