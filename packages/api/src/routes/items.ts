import { Router } from 'express';
import { WasteItemsController } from '../controllers';

const routes = Router();
const itemsController = new WasteItemsController();

routes.get('/', itemsController.index);

export default routes;
