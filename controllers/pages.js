let lang = JSON.parse(require('fs').readFileSync('lang/ru.json', 'utf8'))
let Products = require('../models/products')

exports.home = async ctx => {
	if(!ctx.session.basket)
		ctx.session.basket = []
	await ctx.render('shop/home.ejs', {lang:lang, basket:ctx.session.basket})
}
exports.catalog = async ctx => {
	if(!ctx.session.basket)
		ctx.session.basket = []
	await ctx.render('shop/catalog.ejs', {lang:lang, basket:ctx.session.basket})
}
exports.product = async ctx => {
	if(!ctx.session.basket)
		ctx.session.basket = []
	await ctx.render('shop/product.ejs', {lang:lang, basket:ctx.session.basket, id:ctx.params.id})
}
exports.category = async ctx => {
	if(!ctx.session.basket)
		ctx.session.basket = []
	await ctx.render('shop/products.ejs', {lang:lang, basket:ctx.session.basket, id:ctx.params.id})
}
exports.faq = async ctx => {
	if(!ctx.session.basket)
		ctx.session.basket = []
		await ctx.render('shop/faq.ejs', {lang:lang, basket:ctx.session.basket})
}
exports.basket = async ctx => {
	if(!ctx.session.basket)
		ctx.session.basket = []
	var ids = ""
	for(product of ctx.session.basket){
		ids += `${product.id},`
	}
	let products = await Products.getproducts(ids)
	await ctx.render('shop/basket.ejs', {lang:lang, basket:ctx.session.basket, prod:products.response})
}
exports.smallbasket = async ctx => {
	if(!ctx.session.basket)
		ctx.session.basket = []
	ctx.body = 'Тут будет корзина'
}
exports.order = async ctx => {
	if(!ctx.session.basket)
		ctx.session.basket = []
	ctx.body = 'Заказ заказа'
}