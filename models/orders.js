let db = require('../db.js')

//Все заказы, сортировка по дате добавления или заказы определенной даты  или заказы по номеру телефона
exports.orders = async (data=undefined, phone=undefined) => {
	let q = ``
	return await db.query(q)
}
//Информация о конкретном заказе
exports.order = async (id) => {
	let q = ``
	return await db.query(q)
}
//Изменение статуса заказа
exports.editstasus = async (id, status) => {
	let q = ``
	return await db.query(q)
}
//Добавление заказа в корзину
exports.add = async () => {
	let q = ``
	return await db.query(q)
}
//Редактированиек заказа
exports.edit = async () => {
	let q = ``
	return await db.query(q)
}
//Архивирование заказа
exports.delete = async () => {
	let q = ``
	return await db.query(q)
}