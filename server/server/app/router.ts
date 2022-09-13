import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.post('/api/login', controller.home.login);
  router.post('/api/list', controller.home.list);
};
