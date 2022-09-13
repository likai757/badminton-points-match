import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};

export default plugin;
