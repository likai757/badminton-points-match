import { Service } from 'egg';

/**
 * Test Service
 */
export default class ModelService extends Service {

  public async getList() {

    const data = await this.app.mysql.select('user');
    return {
      errCode: 0,
      data,
    };
  }
}
