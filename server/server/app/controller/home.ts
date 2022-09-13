import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async login() {
    const { ctx } = this;
    const token = Date.now() + `${Math.random().toString(36).slice(-6)}`;
    this.app.redis.set(token, ctx.request.body.userName);
    ctx.body = {
      token,
    };
  }

  public async list() {
    const { ctx } = this;
    const res = await this.app.redis.get(ctx.header.token as string);
    if (!res){
      ctx.body = {
        errCode: 1,
        data: [1, 2, 3, 4, 5],
      };
    } else {
      ctx.body = await ctx.service.modelService.getList();
    }
  }
}
