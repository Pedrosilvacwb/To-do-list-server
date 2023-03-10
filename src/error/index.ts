import { NextFunction, Request, Response } from 'express';

class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Response => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.error(err);

  return res.status(500).json({ message: 'Internal Server Error.' });
};

export { AppError, errorHandler };
