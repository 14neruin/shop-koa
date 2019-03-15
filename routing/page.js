const Router = require('koa-router');
const router = new Router();

//Товары всех категорий
router.get("/", async ctx => {
	ctx.body = "Hi =) This is API. Go to path /api"
})

module.exports = router;