let Products = require('../models/products')

exports.allProducts = async ctx => {
	let search = (ctx.query.search)?ctx.query.search:undefined
	let start = (ctx.query.start)?ctx.query.start:0
	let count = (ctx.query.count)?ctx.query.count:25

	ctx.body = await Products.allProducts(start, count, search)
}

exports.productsCategory = async ctx => {
	let search = (ctx.query.search)?ctx.query.search:undefined
	let start = (ctx.query.start)?ctx.query.start:0
	let count = (ctx.query.count)?ctx.query.count:25

	ctx.body = await Products.productsCategory(ctx.params.id, start, count, search)
}

exports.product = async ctx => {
	ctx.body = await Products.product(ctx.params.id)
}

exports.categories = async ctx => {
	ctx.body = await Products.categories()
}

exports.category = async ctx => {
	ctx.body = await Products.category(ctx.params.id)
}