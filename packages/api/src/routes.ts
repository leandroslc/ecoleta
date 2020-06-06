import { Router } from 'express';

const routes = Router();

routes.get('/hello', (_request, response) => {
  return response.send('Hello!');
});

export default routes;
