let Basket = require('../models/basket')

exports.get = async ctx => {
	if(!ctx.session.basket) ctx.session.basket = []
	ctx.body = ctx.session.basket
	if(ctx.body) ctx.status = 200
}

exports.add = async ctx => {
	if(!ctx.session.basket) ctx.session.basket = []

	let id = ctx.params.id
	if(Number(id) <= 0){
		ctx.body = {status:false}
		return ctx.status = 404
	}

	let search = 0
	for(product of ctx.session.basket){
		if(product.id == id){
			product.col++
			search = 1
		}
	}
	if(search == 0)
		ctx.session.basket[ctx.session.basket.length] = {id:id, col:1}

	ctx.body = {status:true}
	if(ctx.body) ctx.status = 200
}

exports.edit = async ctx => {
	if(!ctx.session.basket) ctx.session.basket = []

	let id = ctx.params.id
	let count = (ctx.query.col)?ctx.query.col:-1
	for(i in ctx.session.basket){
		if(ctx.session.basket[i].id == id){
			if(Number(ctx.session.basket[i].col) + Number(count) <= 0)
				ctx.session.basket.splice(i, 1)
			else
				ctx.session.basket[i].col = Number(ctx.session.basket[i].col) + Number(count)
		ctx.status = 200
		return ctx.body = {status:true}
		}
	}
	ctx.body = {status:false, error:"No product in basket"}
}

exports.delete = async ctx => {
	if(!ctx.session.basket) ctx.session.basket = []

	let id = ctx.params.id
	let search = 0
	for(i in ctx.session.basket){
		if(ctx.session.basket[i].id == id){
			ctx.session.basket.splice(i, 1)
			ctx.session.save()
			ctx.status = 200
			return ctx.body = {status:true}
		}
	}
	ctx.body = {status:false, error:"No product in basket"}
}

exports.price = async ctx => {
	if(!ctx.session.basket) ctx.session.basket = []

	let ids = ""
	for(product of ctx.session.basket){
		ids += `${product.id},`
	}

	ctx.body = await Basket.price(`${ids}0`)
	if(ctx.body) ctx.status = 200
}