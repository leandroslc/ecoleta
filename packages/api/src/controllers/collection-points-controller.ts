import { Request, Response } from 'express';
import { CreateCollectionPointCommand } from '@ecoleta/core';
import { getCustomRepository } from '../database';
import { CollectionPointRepository } from '../repositories';
import stringUtil from '../util/string';
import { CollectionPointEntity } from '../models';

export class CollectionPointsController {
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
