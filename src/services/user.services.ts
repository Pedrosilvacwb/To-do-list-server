import AppDataSource from '../data-source';
import Users from '../entities/user.entity';
import { AppError } from '../error';
import {
  IUserRequest,
  IUserResponse,
  IUserUpdate,
} from '../interfaces/user.interfaces';
import { userResponseSchema } from '../schemas/user.schemas';
import jwt from 'jsonwebtoken';
import { hash } from 'bcryptjs';

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
  const user = await userRepo.findOne({
    where: { id: id },
    relations: { activities: true },
  });
  if (!user) throw new AppError('Usuário não encontrado!', 404);
  const userDisplay = userResponseSchema.validate(user, {
    stripUnknown: true,
  });
  return userDisplay;
};

export const updateUserService = async (
  payload: IUserUpdate,
  id: string,
): Promise<IUserResponse> => {
  const userRepo = AppDataSource.getRepository(Users);

  const userToUpdate = await userRepo.findOne({
    where: { id: id },
  });

  userToUpdate.email = payload.email ? payload.email : userToUpdate.email;
  userToUpdate.name = payload.name ? payload.name : userToUpdate.name;
  userToUpdate.imgUrl = payload.imgUrl ? payload.imgUrl : userToUpdate.imgUrl;
  userToUpdate.password = payload.password
    ? payload.password
    : userToUpdate.password;

  await userRepo.save(userToUpdate);
  delete userToUpdate.password;
  return userToUpdate;
};

export const deleteUserService = async (id: string): Promise<object> => {
  const userRepo = AppDataSource.getRepository(Users);
  const user = await userRepo.findOne({ where: { id: id } });

  if (!user.isActive) {
    throw new AppError('Usuário inativo', 400);
  }
  user.isActive = false;
  await userRepo.softRemove(user);
  return {};
};
