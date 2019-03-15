const Koa		= require('koa'),
	bodyParser	= require('koa-bodyparser'),
	logger		= require('koa-logger'),
	api			= require('./routing/api'),
	pages		= require('./routing/page'),
	error		= require('./middlewares/error'),
	http		= require('http'),
	https		= require('https'),
	session		= require('koa-session'),
	static		= require('koa-static'),
	views		= require('koa-views')

const mongourl = process.env.MONGODB_URI || 'mongodb://localhost/session'

const app = new Koa()
app.keys = ['dick']

app.use(logger())
	.use(bodyParser())
	.use(views(__dirname + '/views'))
	.use(session(app))
	.use(error)
	.use(api.routes())
	.use(pages.routes())
	.use(static(__dirname + '/static'))

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