import AppDataSource from '../data-source';
import Activities from '../entities/activities.entity';
import { IActivityRequest } from '../interfaces/activities.interface';
import jwt from 'jsonwebtoken';
import Users from '../entities/user.entity';

export const getActivitiesService = async (userId: string) => {
  const actRepo = AppDataSource.getRepository(Activities);
  const activities = actRepo.find();
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
