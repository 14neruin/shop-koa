let db = require('../db.js')
//Категории товаров
exports.categories = async () => {
	let q = `SELECT * FROM category`
	return await db.query(q)
}
//Информация об определенной категории
exports.category = async (id) => {
	let q = `SELECT * FROM category WHERE id=${id}`
	return await db.query(q)
}
//Добавление категории товаров
exports.add = async (name, photo_id) => {

}
//Архивирование категории
exports.delete = async (id) => {

}
//Редактирование информации о категории
exports.edit = async (id, name, photo_id) => {

}