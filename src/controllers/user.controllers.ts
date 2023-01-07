import { Request, Response } from 'express';
import { IUserRequest } from '../interfaces/user.interfaces';
import {
  createUserService,
  retireveUserService,
} from '../services/user.services';

export const createUserController = async (req: Request, res: Response) => {
  const payload: IUserRequest = req.body;

  const data = await createUserService(payload);

  return res.status(200).json(data);
};

export const retireveUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await retireveUserService(id);

  return res.status(200).json(data);
};
