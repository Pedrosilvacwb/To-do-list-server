import { Router } from 'express';
import {
  createActivitiesController,
  deleteActivitieController,
  getActivitiesController,
  updateActivitieController,
} from '../controllers/activities.controller';

import { verifyTokenMiddleware } from '../middlewares/user.middleware';

const actvRouter = Router();

actvRouter.get('', verifyTokenMiddleware, getActivitiesController);
actvRouter.post('', verifyTokenMiddleware, createActivitiesController);
actvRouter.delete('/:id', verifyTokenMiddleware, deleteActivitieController);
actvRouter.patch('/:id', verifyTokenMiddleware, updateActivitieController);

export default actvRouter;
