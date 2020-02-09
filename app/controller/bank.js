'use strict';

const Controller = require('egg').Controller;

class BankController extends Controller {
  async index() {
    const { ctx } = this;
    //ctx.response.body = {ret:'121212'}
    ctx.body = await this.model.Bank.find({});
  }
}

module.exports = BankController;
