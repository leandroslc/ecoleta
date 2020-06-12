import fs from 'fs';
import path from 'path';
import request from 'supertest';
import faker from 'faker/locale/en';
import { expect } from 'chai';
import { Connection } from 'typeorm';
import { CreateCollectionPointCommand, Dictionary } from '@ecoleta/core';
import { createConnection } from './test-utils';
import app from '../../src/app';

import {
  CollectionPointEntity,
  CollectionPointItemEntity,
} from '../../src/models';

function getCreateCollectionPoint() {
  return {
    name: faker.company.companyName(),
    email: faker.internet.email(),
    whatsapp: faker.phone.phoneNumber(),
    city: faker.address.city(),
    state: faker.address.stateAbbr().substring(0, 2),
    latitude: faker.random.number(),
    longitude: faker.random.number(),
    items: '1, 3,5',
  };
}

function getCreateCollectionPointCommand() {
  return getCreateCollectionPoint() as CreateCollectionPointCommand;
}

function getImageStream() {
  return fs.createReadStream(path.resolve(__dirname, 'assets', 'test-img.png'));
}

describe('/points', () => {
  let connection: Connection;

  beforeEach(async () => {
    connection = await createConnection();

    connection.manager.delete(CollectionPointItemEntity, {});
    connection.manager.delete(CollectionPointEntity, {});
  });

  afterEach(async () => {
    if (connection && connection.isConnected) {
      await connection.close();
    }
  });

  describe('post', () => {
    it('should insert new point with items', async () => {
      // Given
      const command = getCreateCollectionPointCommand();
      const img = getImageStream();

      // When
      const response = await request(app)
        .post('/points')
        .field(command as Dictionary<CreateCollectionPointCommand>)
        .attach('image', img);

      // Then
      const id = response.body.id as number;
      const pointItems = await connection.manager.find(
        CollectionPointItemEntity,
        {
          where: {
            collectionPointId: id,
          },
        },
      );

      expect(response.status).to.be.equal(201);
      expect(id).to.be.greaterThan(0);
      expect(response.body.image).to.match(/\w+\.png$/);
      expect(pointItems).to.have.length(3);
    });

    it('should give error if point already exists', async () => {
      // Given
      const command = getCreateCollectionPointCommand();
      const img = getImageStream();
      const point = connection.manager.create(CollectionPointEntity, command);

      await connection.manager.save(point);

      // When
      const response = await request(app)
        .post('/points')
        .field(command as Dictionary<CreateCollectionPointCommand>)
        .attach('image', img);

      // Then
      expect(response.status).to.be.equal(409);
      expect(response.body).to.have.property('message');
    });
  });

  describe('show', () => {
    it('should return collection point with associated items', async () => {
      // Given
      const point = connection.manager.create(
        CollectionPointEntity,
        getCreateCollectionPoint(),
      );

      await connection.manager.save(point);

      await connection.manager.save([
        new CollectionPointItemEntity({
          collectionPointId: point.id,
          wasteItemId: 1,
        }),
        new CollectionPointItemEntity({
          collectionPointId: point.id,
          wasteItemId: 2,
        }),
      ]);

      // When
      const response = await request(app).get(`/points/${point.id}`).send();

      // Then
      expect(response.status).to.be.equal(200);
      expect(response.body).to.include(point);
      expect(response.body.imageUrl).to.exist;
      expect(response.body.items).to.have.length(2);
      expect(response.body.items[0]).to.have.property('title');
    });

    it('should return error if point not found', async () => {
      // When
      const response = await request(app).get(`/points/999`).send();

      // Then
      expect(response.status).to.be.equal(404);
      expect(response.body).to.have.property('message');
    });
  });

  describe('index', () => {
    it('should', async () => {
      // Given
      const points = connection.manager.create(CollectionPointEntity, [
        getCreateCollectionPoint(),
        getCreateCollectionPoint(),
      ]);

      await connection.manager.save(points);

      await connection.manager.save([
        new CollectionPointItemEntity({
          collectionPointId: points[0].id,
          wasteItemId: 1,
        }),
        new CollectionPointItemEntity({
          collectionPointId: points[1].id,
          wasteItemId: 2,
        }),
      ]);

      // When
      const response = await request(app)
        .get('/points')
        .query({ items: '2, 1' })
        .send();

      // Then
      expect(response.status).to.be.equal(200);
      expect(response.body).to.have.length(2);
      expect(response.body[0].imageUrl).to.exist;
    });
  });
});
