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
	ctx.body = `{"result":"Добавление категорий"}`
	if(ctx.body) ctx.status = 200
}

exports.edit = async ctx => {
	ctx.body = `{"result":"Редактирование Категорий"}`
	if(ctx.body) ctx.status = 200
}

exports.delete = async ctx => {
	ctx.body = `{"result":"Удаление категорий"}`
	if(ctx.body) ctx.status = 200
}