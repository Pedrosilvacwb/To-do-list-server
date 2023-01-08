import { Request, Response } from 'express';
import { IUserRequest, IUserUpdate } from '../interfaces/user.interfaces';
import {
  createUserService,
  deleteUserService,
  retireveUserService,
  updateUserService,
} from '../services/user.services';

export const createUserController = async (req: Request, res: Response) => {
  const payload: IUserRequest = req.body;

  const data = await createUserService(payload);

  return res.status(200).json(data);
};

export const retireveUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const data = await retireveUserService(id);

  return res.status(200).json(data);
};

export const deleteUserController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const id: string = req.params.id;
  const data = await deleteUserService(id);
  return res.status(204).json(data);
};

export const updateUserController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const id: string = req.params.id;
  const payload: IUserUpdate = req.body;
  const data = await updateUserService(payload, id);
  return res.status(200).json(data);
};
