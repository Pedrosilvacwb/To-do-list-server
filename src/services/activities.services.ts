import AppDataSource from '../data-source';
import Activities from '../entities/activities.entity';
import { IActivityRequest } from '../interfaces/activities.interface';
import jwt from 'jsonwebtoken';
import Users from '../entities/user.entity';
import { IUserResponse } from '../interfaces/user.interfaces';
import { AppError } from '../error';

export const getActivitiesService = async (token: string) => {
  const actRepo = AppDataSource.getRepository(Activities);
  const activities = await actRepo.find({});

  return activities;
};

export const createActivitiesService = async (
  payload: IActivityRequest,
  token: string,
) => {
  const email = jwt.decode(token).sub;
  const userRepo = AppDataSource.getRepository(Users);
  const user = await userRepo.findOne({ where: { email: email as string } });
  const actRepo = AppDataSource.getRepository(Activities);
  const activitie = actRepo.create({ ...payload, user: user });
  await actRepo.save(activitie);
  return 'Atividade criada';
};

export const deleteActivitieService = async (id: string) => {
  const actRepo = AppDataSource.getRepository(Activities);
  const activitie = await actRepo.findOne({ where: { id: id } });
  if (!activitie) throw new AppError('Atividade não encontrada!!', 404);
  await actRepo.softRemove(activitie);
  return {};
};

export const updateActivitieService = async (
  id: string,
  payload: IActivityRequest,
) => {
  const actRepo = AppDataSource.getRepository(Activities);
  const activitie = await actRepo.findOne({ where: { id: id } });
  if (!activitie) throw new AppError('Atividade não encontrada!!', 404);
  const newActivitie = { ...activitie, ...payload };
  await actRepo.save(newActivitie);
  return newActivitie;
};
