import { DataSource } from 'typeorm';
import path from 'path';
import 'dotenv/config';

const nodeEnv: string = process.env.NODE_ENV;

const AppDataSource =
  nodeEnv === 'production'
    ? new DataSource({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [path.join(__dirname, './entities/**.{js,ts}')],
        migrations: [path.join(__dirname, './migrations/**{js,ts}')],
      })
    : new DataSource({
        type: 'postgres',
        host: process.env.PGHOST,
        port: +process.env.PGPORT,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [path.join(__dirname, './entities/**.{js,ts}')],
        migrations: [path.join(__dirname, './migrations/**{js,ts}')],
      });

export default AppDataSource;
