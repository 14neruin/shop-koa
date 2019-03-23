let Employees = require('../models/employees')

exports.employees = async ctx => {
	ctx.body = 'Вывод всех сотрудников'
}

exports.employee = async ctx => {
	ctx.body = 'Информацио о конкретном сотруднике'
}

exports.add = async ctx => {
	ctx.body = 'Добавление сотрудника'
}

exports.edit = async ctx => {
	ctx.body = 'Редактирование сотрудника'
}

exports.status = async ctx => {
	ctx.body = 'Изменение разрешения сотрудника'
}

exports.delete = async ctx => {
	ctx.body = 'Архивирование сотрудника'
}