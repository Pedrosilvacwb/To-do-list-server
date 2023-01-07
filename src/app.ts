import express from 'express';
import 'reflect-metadata';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());
app.use('/users', userRouter);

export default app;
