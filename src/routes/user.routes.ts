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
} from '../middlewares/user.middleware';
import { createUserSchema } from '../schemas/user.schemas';

const userRouter = Router();

userRouter.post(
  '',
  validateUserRequestDataMiddleware(createUserSchema),
  createUserController,
);

userRouter.get('/:id', verifyTokenMiddleware, retireveUserController);

userRouter.patch('/:id', verifyTokenMiddleware, updateUserController);
userRouter.delete('/:id', verifyTokenMiddleware, deleteUserController);

export default userRouter;
