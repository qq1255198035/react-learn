const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
// another writer !
// const Router = require('koa-router');
// const router = new Router();
router.get('/', async (ctx,next) => {
    ctx.body = '11'
    next();
})
router.get('/index', async (ctx,next) => {
    return new Promise((res,rej) => {
        res(ctx.body = '222')
    })
})
app.use(router.routes())

app.use(router.allowedMethods())

app.listen(3000);
console.log('started');