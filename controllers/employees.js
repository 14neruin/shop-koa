let Employees = require('../models/employees')

exports.employees = async ctx => {
	ctx.body = `{"result":"Вывод всех сотрудников"}`
	if(ctx.body) ctx.status = 200
}

exports.employee = async ctx => {
	ctx.body = `{"result":"Вывод конкретного сотрудника"}`
	if(ctx.body) ctx.status = 200
}

exports.add = async ctx => {
	ctx.body = `{"result":"Добавление сотрудника"}`
	if(ctx.body) ctx.status = 200
}

exports.edit = async ctx => {
	ctx.body = `{"result":"Редактирвоание сотрудника"}`
	if(ctx.body) ctx.status = 200
}

exports.status = async ctx => {
	ctx.body = `{"result":"Изменение разрешений для сотрудника"}`
	if(ctx.body) ctx.status = 200
}

exports.delete = async ctx => {
	ctx.body = `{"result":"Архивирование сотрудника"}`
	if(ctx.body) ctx.status = 200
}