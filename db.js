let mysql = require('mysql')
let dbConnect = {}
try{
	dbConnect = JSON.parse(require('fs').readFileSync('dbconnect.json', 'utf8'))
} catch(err){
	console.log(err)
}

let state = {
	db:null
}

this.get = () => state.db

this.connect = (done) => {
	if(state.db)
		return done()

	let connection = mysql.createConnection(dbConnect)
	connection.connect((err) => {
		if (err) 
			return done(err)

		state.db = connection
		return done()
	})
}

this.end = () => {
	if(state.db)
		state.db.end()
	state.db = null
}

this.new_query = (q) => new Promise((cb) => {
	this.connect((err)=>{
		if(err){
			this.end()
			return cb({error:"Connecting error"})
		}

		this.get().query(q, (err, result) => {
			this.end()
			if(err)
				return cb({error:"Query error"})
			return cb({response:result})
		})
		this.end()
	})
})

exports.query = async (q) => await this.new_query(q)