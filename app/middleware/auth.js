module.exports = options => {
    return async function auth(ctx, next) {
      ctx.logger.info(options.threshold);
      if(ctx.query.id === 'admin'){
        await next();
      }
      else{
        ctx.logger.info('check error!');
        ctx.status = 403
        ctx.body = 'auth fail'
      }
      
    };
  };