import { Request, Response } from 'express';
import { IUserLogin } from '../interfaces/user.interfaces';
import { createSessionService } from '../services/session.services';

export const createSessionController = async (req: Request, res: Response) => {
  const payload: IUserLogin = req.body;
  const data = await createSessionService(payload);
  return res.status(200).json(data);
};
