const Router = require('koa-router');
const router = new Router();

let productsController = require('./controllers/products')

//config
router.get('/api', async ctx => {
	ctx.body = { ver:'1.0', lang:"ru, en"}
	ctx.status = 200
})

//Товары всех категорий
router.get("/api/products", productsController.allProducts)
//Товары определенной категории
router.get("/api/products/:id", productsController.productsCategory)
//Данные о продукте
router.get("/api/product/:id", productsController.product)
//Список категорий
router.get("/api/categories", productsController.categories)
//Информация о категории с определенным id
router.get("/api/categories/:id", productsController.category)
/*
	+ Добавление, удаление, редактирование товара,
	+ Добавление, удаление, редактирование категорий товаров
*/

module.exports = router;