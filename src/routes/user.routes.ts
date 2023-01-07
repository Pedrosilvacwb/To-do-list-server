import { Router } from 'express';
import {
  createUserController,
  retireveUserController,
} from '../controllers/user.controllers';
import {
  validateUserRequestDataMiddleware,
  verifyTokenMiddleware,
} from '../middlewares/user.middleware';
import { createUserSchema } from '../schemas/user.schemas';

const userRouter = Router();

userRouter.post(
  '',
  validateUserRequestDataMiddleware(createUserSchema),
  createUserController,
);

userRouter.get('/:id', verifyTokenMiddleware, retireveUserController);

export default userRouter;
