import request from 'supertest';
import { expect } from 'chai';
import initialize from './initialize';
import app from '../../src/app';

describe('/items', () => {
  beforeAll(async () => {
    await initialize();
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
