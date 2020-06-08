import { Router } from 'express';
import { WasteItemsController } from './controllers';

const routes = Router();
const wasteItemsController = new WasteItemsController();

routes.get('/items', wasteItemsController.index);

export default routes;
