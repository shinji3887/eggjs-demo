'use strict';
 
const Service = require('egg').Service;
 
class UserService extends Service {
  /**
     * 根据ID获取单个项目
     */
  async getProjectById() {
    const { ctx, app } = this;
    
      const results = await ctx.model.Article.find({});
      return results;
    
  }
}
module.exports = UserService;