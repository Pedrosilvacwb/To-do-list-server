import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  retireveUserController,
  updateUserController,
} from '../controllers/user.controllers';
import {
  validateUserRequestDataMiddleware,
  verifyTokenMiddleware,
  verifyUserExistsMiddleware,
} from '../middlewares/user.middleware';
import { createUserSchema } from '../schemas/user.schemas';

const userRouter = Router();

userRouter.post(
  '',
  validateUserRequestDataMiddleware(createUserSchema),
  createUserController,
);

userRouter.get('/:id', verifyTokenMiddleware, retireveUserController);

userRouter.patch(
  '/:id',
  verifyTokenMiddleware,
  verifyUserExistsMiddleware,
  updateUserController,
);
userRouter.delete(
  '/:id',
  verifyTokenMiddleware,
  verifyUserExistsMiddleware,
  deleteUserController,
);

export default userRouter;
