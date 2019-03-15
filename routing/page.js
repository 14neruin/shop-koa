const Router = require('koa-router');
const router = new Router();

//Товары всех категорий
router.get("/", async ctx => {
	let n = ctx.session.views || 0;
	ctx.session.views = ++n;
	ctx.body = n + ' views';
})

module.exports = router;