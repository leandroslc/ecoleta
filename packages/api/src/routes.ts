import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import {
  CollectionPointsController,
  WasteItemsController,
} from './controllers';

const routes = Router();
const upload = multer(multerConfig);

const wasteItemsController = new WasteItemsController();
const collectionPointsController = new CollectionPointsController();

routes.get('/items', wasteItemsController.index);

routes.get('/points/:id', collectionPointsController.show);
routes.post(
  '/points',
  upload.single('image'),
  collectionPointsController.create,
);

export default routes;
