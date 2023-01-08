import { Router } from 'express';
import { createSessionController } from '../controllers/session.controller';
import { validateUserRequestDataMiddleware } from '../middlewares/user.middleware';
import { loginUserSchema } from '../schemas/user.schemas';

const sessionRouter = Router();

sessionRouter.post(
  '',
  validateUserRequestDataMiddleware(loginUserSchema),
  createSessionController,
);

export default sessionRouter;
