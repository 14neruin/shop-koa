const Koa          = require('koa')
const bodyParser   = require('koa-bodyparser')
const cors         = require('koa-cors')
const logger       = require('koa-logger')
const router       = require('./router')
const errorHandler = require('./middlewares/error')

const app = new Koa()

app.use(logger())
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(errorHandler)

const port = process.env.PORT || 80
// eslint-disable-next-line
app.listen(port, () => console.log('Server running on: ', port))