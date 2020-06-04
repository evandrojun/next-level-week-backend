import express from 'express';

import ItemsController from './controllers/items_controller';
import PointsController from './controllers/points_controller';

const routes = express.Router();

const itemsController = new ItemsController();
const pointsController = new PointsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);

export default routes;
