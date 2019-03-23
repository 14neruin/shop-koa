let Orders = require('../models/orders')

exports.orders = async ctx => {
	ctx.body = 'Заказы'
}

exports.order = async ctx => {
	ctx.body = 'Заказ'
}

exports.editstatus = async ctx => {
	ctx.body = 'Редактирвоание статуса заказа'
}

exports.add = async ctx => {
	ctx.body = 'Добавление заказа'
}

exports.edit = async ctx => {
	ctx.body = 'Редактирование заказа'
}
exports.delete = async ctx => {
	ctx.body = 'Удаление заказа'
}