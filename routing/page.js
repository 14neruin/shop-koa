const Router = require('koa-router');
const router = new Router();

let lang = JSON.parse(require('fs').readFileSync('lang/ru.json', 'utf8'))
//Товары всех категорий
router.get("/", async ctx => {
	if(!ctx.session.basket)
		ctx.session.basket = []
	await ctx.render('shop/home.ejs', {lang:lang, basket:ctx.session.basket})
})

module.exports = router;