const Router = require('koa-router');
const router = new Router();

//Товары всех категорий
router.get("/", async ctx => {
	if(!ctx.session.basket) ctx.session.basket = []
	ctx.session.basket.push(1)
	ctx.body = ctx.session.basket;
})

module.exports = router;