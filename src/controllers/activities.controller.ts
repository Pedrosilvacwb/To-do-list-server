import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { IActivityRequest } from '../interfaces/activities.interface';
import {
  createActivitiesService,
  deleteActivitieService,
  getActivitiesService,
  updateActivitieService,
} from '../services/activities.services';

export const getActivitiesController = async (req: Request, res: Response) => {
  const token: string = req.headers.authorization.split(' ')[1];
  const data = await getActivitiesService(token);

  return res.status(200).json(data);
};

export const createActivitiesController = async (
  req: Request,
  res: Response,
) => {
  const payload: IActivityRequest = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const data = await createActivitiesService(payload, token);

  return res.status(201).json(data);
};

export const deleteActivitieController = async (
  req: Request,
  res: Response,
) => {
  const id: string = req.params.id;
  const data = await deleteActivitieService(id);

  return res.status(200).json(data);
};

export const updateActivitieController = async (
  req: Request,
  res: Response,
) => {
  const id: string = req.params.id;
  const payload = req.body;
  const data: IActivityRequest = await updateActivitieService(id, payload);

  return res.status(200).json(data);
};
