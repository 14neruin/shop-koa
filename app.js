const Koa		= require('koa'),
	bodyParser	= require('koa-bodyparser'),
	logger		= require('koa-logger'),
	api			= require('./routing/api'),
	pages		= require('./routing/page'),
	error		= require('./middlewares/error'),
	http		= require('http'),
	https		= require('https')

const app = new Koa()

app.use(logger())
	.use(bodyParser())
	.use(api.routes())
	.use(pages.routes())
	.use(error)

const port = process.env.PORT || 443
const httpport = process.env.PORT || 80

const options = {
	key: require('fs').readFileSync('privatekey.pem'),
	cert: require('fs').readFileSync('certificate.pem')
}

https.createServer(options, app.callback()).listen(port, () => console.log("Listening on port " + port))

http.createServer((req, res) => {
	res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url })
	res.end()
}).listen(httpport)