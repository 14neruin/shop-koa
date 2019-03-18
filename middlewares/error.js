'use strict';

const errorHandler = async (ctx, next) => {
	try{
		ctx.body = {"error":"Page not found"}
		ctx.status = 404
		await next()
	}catch(err){
		console.error(err)
		ctx.body = undefined
		ctx.status = ctx.status >= 400 && ctx.status || 400;
		if (err.message)
			ctx.body = {"error": [err.message]}
	}
}

module.exports = errorHandler