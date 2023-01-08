import { compare } from 'bcryptjs';
import AppDataSource from '../data-source';
import Users from '../entities/user.entity';
import { AppError } from '../error';
import 'dotenv';
import { IUserLogin } from '../interfaces/user.interfaces';
import jwt from 'jsonwebtoken';

export const createSessionService = async (
  payload: IUserLogin,
): Promise<{ token: string }> => {
  const userRepo = AppDataSource.getRepository(Users);
  const user = await userRepo.findOne({ where: { email: payload.email } });
  if (!user) throw new AppError('Email ou senha inválidos!', 403);
  const passwordMatch = await compare(payload.password, user.password);
  if (!passwordMatch) throw new AppError('Email ou senha inválidos!', 403);

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: '24h',
    subject: user.email,
  });

  return { token };
};
