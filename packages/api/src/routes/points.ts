import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
import { CollectionPointsController } from '../controllers';

const routes = Router();
const upload = multer(multerConfig);
const pointsController = new CollectionPointsController();

routes.get('/', pointsController.index);
routes.get('/:id', pointsController.show);
routes.post('/', upload.single('image'), pointsController.create);

export default routes;
