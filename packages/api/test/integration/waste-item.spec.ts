import request from 'supertest';
import { expect } from 'chai';
import { Connection } from 'typeorm';
import { createConnection } from './test-utils';
import app from '../../src/app';

describe('/items', () => {
  let connection: Connection;

  beforeEach(async () => {
    connection = await createConnection();
  });

  afterEach(async () => {
    await connection.close();
  });

  it('should return a collection of items', async () => {
    // When
    const response = await request(app).get('/items').send();

    // Then
    expect(response.body).to.be.instanceOf(Array);

    const item = response.body[0];

    expect(item).to.have.property('title');
    expect(item).to.have.property('imageUrl');
    expect(item.imageUrl).to.contain('http://');
  });
});
