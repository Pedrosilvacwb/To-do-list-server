import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { IActivityRequest } from '../interfaces/activities.interface';
import { createActivitiesService } from '../services/activities.services';

export const createActivitiesController = async (
  req: Request,
  res: Response,
) => {
  const payload: IActivityRequest = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const data = await createActivitiesService(payload, token);

  return res.status(200).json(data);
};
