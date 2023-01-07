import AppDataSource from '../data-source';
import Users from '../entities/user.entity';
import { AppError } from '../error';
import { IUserRequest, IUserResponse } from '../interfaces/user.interfaces';
import { userResponseSchema } from '../schemas/user.schemas';
import jwt from 'jsonwebtoken';

export const createUserService = async (
  payload: IUserRequest,
): Promise<IUserResponse> => {
  const userRepo = AppDataSource.getRepository(Users);
  const user = await userRepo.findOne({ where: { email: payload.email } });
  if (user) throw new AppError('Email já cadastrado!');
  const newUser = userRepo.create({ ...payload });
  await userRepo.save(newUser);
  const userDisplay = await userResponseSchema.validate(newUser, {
    stripUnknown: true,
  });
  return userDisplay;
};

export const retireveUserService = async (
  id: string,
): Promise<IUserResponse> => {
  const userRepo = AppDataSource.getRepository(Users);
  const user = await userRepo.findOne({ where: { id: id } });
  const userDisplay = userResponseSchema.validate(user, {
    stripUnknown: true,
  });
  return userDisplay;
};
