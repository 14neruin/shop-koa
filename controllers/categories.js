let Categories = require('../models/categories')

exports.categories = async ctx => {
	ctx.body = await Categories.categories()
	if(ctx.body) ctx.status = 200
}

exports.category = async ctx => {
	ctx.body = await Categories.category(ctx.params.id)
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