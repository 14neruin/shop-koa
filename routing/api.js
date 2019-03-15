const Router = require('koa-router');
const router = new Router();

let productsController = require('../controllers/products')
let basketController = require('../controllers/basket')

//config
router.get('/api', async ctx => ctx.body = { ver:'1.0', lang:"ru, en"})

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
//Вывод товаров в корзине(id, count)
router.get("/api/basket", basketController.get)
//Вывод итоговой стоимости
router.get("/api/price", basketController.price)
//Добавление продукта в корзину
router.post("/api/addtobasket:id", basketController.add)
//Уменьшаем/увеличиваем количество товара
router.put("/api/editbasket:id", basketController.edit)
//Удаление продукта из корзины
router.delete("/api/deletetobasket:id", basketController.delete)

module.exports = router;