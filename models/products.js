let db = require('../db.js')

exports.allProducts = async (start = 0, count = 25, search = undefined) => {
	let q = (search != undefined)?`SELECT * FROM shop.products LEFT JOIN shop.category ON shop.products.category = shop.category.id WHERE prodname LIKE '%${search}%' LIMIT ${start}, ${count}`:`SELECT * FROM shop.products LEFT JOIN shop.category ON shop.products.category = shop.category.id LIMIT ${start}, ${count}`
	return await db.query(q)
}

exports.productsCategory = async (id, start = 0, count = 25, search = undefined, cb) => {
	let q = (search != undefined)?`SELECT * FROM shop.products LEFT JOIN shop.category ON shop.products.category = shop.category.id WHERE category = ${id} AND prodname LIKE '%${search}%' LIMIT ${start}, ${count}`:`SELECT * FROM shop.products LEFT JOIN shop.category ON shop.products.category = shop.category.id WHERE category = ${id} LIMIT ${start}, ${count}`
	return await db.query(q)
}

exports.product = async (id, cb) => {
	let q = `SELECT * FROM products WHERE id_product = ${id}`
	return await db.query(q)
}

exports.categories = async (cb) => {
	let q = `SELECT * FROM category`
	return await db.query(q)
}

exports.category = async (id, cb) => {
	let q = `SELECT * FROM category WHERE id=${id}`
	return await db.query(q)
}

exports.getproducts = async (ids, cb) => {
	let q = `SELECT * FROM products WHERE id_product IN (${ids}0)`
	return await db.query(q)
}