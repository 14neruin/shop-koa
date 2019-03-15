const Koa		= require('koa'),
	bodyParser	= require('koa-bodyparser'),
	logger		= require('koa-logger'),
	api			= require('./routing/api'),
	pages		= require('./routing/page'),
	error		= require('./middlewares/error'),
	http		= require('http'),
	https		= require('https'),
	session = require('koa-session')

const mongourl = process.env.MONGODB_URI || 'mongodb://localhost/session'

const app = new Koa()
app.keys = ['dick']

const CONF = {
	key: 'koa:sess',
	maxAge: 86400000,
	autoCommit: true,
	overwrite: true,
	httpOnly: true,
	signed: true,
	rolling: false,
	renew: false
}

app.use(logger())
	.use(bodyParser())
	.use(api.routes())
	.use(pages.routes())
	.use(error)
	.use(session(CONF, app))

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