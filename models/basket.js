let db = require('../db')

exports.price = async (ids) => {
	let price = 0
	let q = `SELECT * FROM products WHERE id_product IN (${ids})`
	let products = await db.query(q)

	if(products.error) 
		return products

	for(product of products.result){
		price+=product.price
	}

	return {price:price}
}