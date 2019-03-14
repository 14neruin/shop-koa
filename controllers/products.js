let Products = require('../models/products')

exports.allProducts = async ctx => {
	let search = (ctx.query.search)?ctx.query.search:undefined
	let start = (ctx.query.start)?ctx.query.start:0
	let count = (ctx.query.count)?ctx.query.count:25

	ctx.body = await Products.allProducts(start, count, search)
}

exports.productsCategory = async ctx => {
	let search = (req.query.search)?req.query.search:undefined
	let start = (req.query.start)?req.query.start:0
	let count = (req.query.count)?req.query.count:25

	ctx.body = await Products.productsCategory(req.params.id, start, count, search)
}

exports.product = async ctx => {
	ctx.body = Products.product(req.params.id)
}

exports.categories = async ctx => {
	ctx.body = Products.categories()
}

exports.category = async ctx => {
	ctx.body = Products.category(req.params.id)
}