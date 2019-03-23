const Router = require('koa-router');
const router = new Router();

let categoriesController = require('../controllers/categories')
let productsController = require('../controllers/products')
let basketController = require('../controllers/basket')
let ordersController = require('../controllers/orders')
let employeesController = require('../controllers/employees')

//CONFIG +
router.get('/api', async ctx => {
	ctx.body = { ver:'1.0', lang:"ru, en"}
	ctx.status = 200
})

//PRODUCTS +
router.get("/api/products", productsController.allProducts)
router.get("/api/products/:id", productsController.productsCategory)
router.get("/api/product/:id", productsController.product)
router.post("/api/product/add/:id", productsController.add)
router.put("/api/product/edit/:id", productsController.edit)
router.delete("/api/product/delete/:id", productsController.delete)

//CATEGORIES +
router.get("/api/categories", categoriesController.categories)
router.get("/api/categories/:id", categoriesController.category)
router.post("/api/categories/add/:id", categoriesController.add)
router.put("/api/categories/edit/:id", categoriesController.edit)
router.delete("/api/categories/delete/:id", categoriesController.delete)

//BASKET +
router.get("/api/price", basketController.price)
router.get("/api/basket", basketController.get)
router.post("/api/basket/add/:id", basketController.add)
router.put("/api/basket/edit/:id", basketController.edit)
router.delete("/api/basket/delete/:id", basketController.delete)

//ORDERS +
router.get("/api/orders", ordersController.orders)
router.get("/api/order/:id", ordersController.order)
router.put("/api/order/status/:id", ordersController.editstatus)
router.post("/api/order/add/:id", ordersController.add)
router.put("/api/order/edit/:id", ordersController.edit)
router.delete("/api/order/delete/:id", ordersController.delete)

//EMPLOYEES +
router.get("/api/employees", employeesController.employees)
router.get("/api/employee/:id", employeesController.employee)
router.post("/api/employee/add/:id", employeesController.add)
router.put("/api/employee/edit/:id", employeesController.edit)
router.put("/api/employee/status/:id", employeesController.status)
router.delete("/api/employee/delete/:id", employeesController.delete)

module.exports = router;