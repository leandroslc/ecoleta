import { Router } from 'express';
import { getRepository, CollectionPointEntity } from './database';

const routes = Router();

routes.get('/hello', (_request, response) => {
  const pointRepository = getRepository(CollectionPointEntity);
  pointRepository.find();
  return response.send('Hello!');
});

export default routes;
