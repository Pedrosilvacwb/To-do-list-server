import { Router } from 'express';
import { createActivitiesController } from '../controllers/activities.controller';

import {
  verifyTokenMiddleware,
  verifyUserExistsMiddleware,
} from '../middlewares/user.middleware';

const actvRouter = Router();

actvRouter.post(
  '',
  verifyTokenMiddleware,

  createActivitiesController,
);

export default actvRouter;
