let Orders = require('../models/orders')

exports.orders = async ctx => {
	ctx.body = `{"result":"Все заказы"}`
	if(ctx.body) ctx.status = 200
}

exports.order = async ctx => {
	ctx.body = `{"result":"Конкретный заказ"}`
	if(ctx.body) ctx.status = 200
}

exports.editstatus = async ctx => {
	ctx.body = `{"result":"Изменение статуса заказа"}`
	if(ctx.body) ctx.status = 200
}

exports.add = async ctx => {
	ctx.body = `{"result":"Добавление заказа"}`
	if(ctx.body) ctx.status = 200
}

exports.edit = async ctx => {
	ctx.body = `{"result":"Редактирование заказа"}`
	if(ctx.body) ctx.status = 200
}
exports.delete = async ctx => {
	ctx.body = `{"result":"Удаление заказа"}`
	if(ctx.body) ctx.status = 200
}