import { Router } from 'express';

const routes = Router();

routes.get('/hello', async (_request, response) => {
  return response.send('Hello!');
});

export default routes;
