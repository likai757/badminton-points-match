import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.redis = {
    client: {
      port: 6379,
      host: 'redis',
      password: '',
      db: 0,
    },
  };
  config.mysql = {
    client: {
      host: 'mysql',
      port: '3306',
      user: 'root',
      password: 'admin_123',
      database: 'badminton',
    },
    app: true,
    agent: false,
  };
  return config;
};
