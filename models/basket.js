let db = require('../db')

exports.price = async (ids) => {
	let q = `SELECT * FROM products WHERE id_product IN (${ids})`
	let products = await db.query(q)

	let price = 0
	if(products.error) return products
	for(product of products.result){
		price+=product.price
	}
	return {price:price}
}