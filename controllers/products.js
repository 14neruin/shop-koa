let Products = require('../models/products')

exports.allProducts = async ctx => {
	let search = (ctx.query.search)?ctx.query.search:undefined
	let start = (ctx.query.start)?ctx.query.start:0
	let count = (ctx.query.count)?ctx.query.count:25

	ctx.body = await Products.allProducts(start, count, search)
	if(ctx.body) ctx.status = 200
}

exports.productsCategory = async ctx => {
	let search = (ctx.query.search)?ctx.query.search:undefined
	let start = (ctx.query.start)?ctx.query.start:0
	let count = (ctx.query.count)?ctx.query.count:25

	ctx.body = await Products.productsCategory(ctx.params.id, start, count, search)
	if(ctx.body) ctx.status = 200
}

exports.product = async ctx => {
	ctx.body = await Products.product(ctx.params.id)
	if(ctx.body) ctx.status = 200
}

exports.add = async ctx => {
	ctx.body = ''
}

exports.edit = async ctx => {
	ctx.body = ''
}

exports.delete = async ctx => {
	ctx.body = ''
}