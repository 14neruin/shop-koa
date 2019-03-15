const Router = require('koa-router');
const router = new Router();

const pagesController = require('../controllers/pages')

//Главная страница
router.get("/", pagesController.home)
//Каталог
router.get("/catalog", pagesController.catalog)
//Полноценная корзина
router.get("/basket", pagesController.basket)
//Малая корзина
router.get("/mbasket", pagesController.smallbasket)
//Оформление заказа
router.get("/order", pagesController.order)
//Данные о продукте
router.get("/product:id", pagesController.product)
//Товары с определенной категории
router.get("/category:id", pagesController.category)
//Вопрос Ответ
router.get("/faq", pagesController.faq)

module.exports = router;