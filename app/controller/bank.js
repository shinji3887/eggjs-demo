'use strict';

const Controller = require('egg').Controller;

class BankController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, eggbank111';
  }
}

module.exports = BankController;
