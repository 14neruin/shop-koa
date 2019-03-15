const Router = require('koa-router');
const router = new Router();

//Товары всех категорий
router.get("/", async ctx => {
	ctx.body = "Hi, this API. Redirect: /api"
})

module.exports = router;