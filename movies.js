var Router = require('koa-router');
var router = Router({
  prefix: '/movies'
});

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
	awiat next;
  })
  .post('/users', (ctx, next) => {
    await next;
  })
  .put('/users/:id', (ctx, next) => {
    await next;
  })
  .del('/users/:id', (ctx, next) => {
    await next;
  });
  
  router.get('/:id', (ctx, next) => {
	await next();
});

module.exports = router;