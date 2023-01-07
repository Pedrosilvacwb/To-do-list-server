import { Request, Response } from 'express';
import { IUserRequest } from '../interfaces/user.interfaces';
import { createUserService } from '../services/user.services';

export const createUserController = async (req: Request, res: Response) => {
  const payload: IUserRequest = req.body;
  console.log(payload);
  const data = await createUserService(payload);

  return res.status(200).json(data);
};
