import 'express-async-errors';
import express from 'express';
import 'reflect-metadata';
import { errorHandler } from './error';
import userRouter from './routes/user.routes';
import sessionRouter from './routes/session.routes';
import actvRouter from './routes/activities.routes';

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/login', sessionRouter);
app.use('/activities', actvRouter);
app.use(errorHandler);
export default app;
