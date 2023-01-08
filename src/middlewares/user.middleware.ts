import { Request, Response, NextFunction } from 'express';
import { BaseSchema } from 'yup';
import { AppError } from '../error';
import jwt from 'jsonwebtoken';
import AppDataSource from '../data-source';
import Users from '../entities/user.entity';

export const validateUserRequestDataMiddleware =
  (schema: BaseSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validate = await schema.validate(req.body);

      return next();
    } catch (error) {
      throw new AppError(error.errors, 400);
    }
  };

export const verifyTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.headers.authorization;
  if (!token) {
    throw new AppError('Token Inválido', 401);
  }
  const tokenVerify = token.split(' ');

  return jwt.verify(tokenVerify[1], process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      throw new AppError('Token Inválido', 401);
    }
    return next();
  });
};

export const verifyUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const userRepo = AppDataSource.getRepository(Users);
  const exists = await userRepo.exist({ where: { id: req.params.id } });

  if (!exists) {
    throw new AppError('User not found!', 404);
  }
  return next();
};
