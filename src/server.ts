import app from './app';
import AppDataSource from './data-source';

(async () => {
  await AppDataSource.initialize().catch((err) => console.log(err));

  app.listen(3000, () => console.log('Server running on port 3000'));
})();
