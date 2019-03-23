let db = require('../db.js')
//Все продукты
exports.allProducts = async (start = 0, count = 25, search = undefined) => {
	let q = (search != undefined)?`SELECT * FROM shop.products LEFT JOIN shop.category ON shop.products.category = shop.category.id WHERE prodname LIKE '%${search}%' LIMIT ${start}, ${count}`:`SELECT * FROM shop.products LEFT JOIN shop.category ON shop.products.category = shop.category.id LIMIT ${start}, ${count}`
	return await db.query(q)
}
//Продукты конкретной ктегории
exports.productsCategory = async (id, start = 0, count = 25, search = undefined, cb) => {
	let q = (search != undefined)?`SELECT * FROM shop.products LEFT JOIN shop.category ON shop.products.category = shop.category.id WHERE category = ${id} AND prodname LIKE '%${search}%' LIMIT ${start}, ${count}`:`SELECT * FROM shop.products LEFT JOIN shop.category ON shop.products.category = shop.category.id WHERE category = ${id} LIMIT ${start}, ${count}`
	return await db.query(q)
}
//Информация о конкретном продукте
exports.product = async (id) => {
	let q = `SELECT * FROM products WHERE id_product = ${id}`
	return await db.query(q)
}
//Продукты с определенными id
exports.getproducts = async (ids) => {
	let q = `SELECT * FROM products WHERE id_product IN (${ids}0)`
	return await db.query(q)
}
//Добавление продукта в базу данных
exports.add = async () => {

}
//Редактирование продукта
exports.edit = async () => {

}
//Архивирование продукта
exports.delete = async () => {

}