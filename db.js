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

this.connect = (done) => {
	if(state.db)
		return done()

	let connection = mysql.createConnection(dbConnect)
	connection.connect((err) => {
		if (err) {
			console.error('error connecting: ' + err.stack)
			return done(err)
		}
		state.db = connection
		return done()
	})
}

this.get = () => state.db

this.end = () => {
	if(state.db)
		state.db.end()
	state.db = null
}

exports.query = async (q) => {
	let new_query = (q) => new Promise((cb) => {
		this.connect((err)=>{
			if(err){
				this.end()
				return cb({error:"Connecting error"})
			}

			this.get().query(q, (err, result) => {
				this.end()
				if(err)
					return cb({error:"Query error"})
				return cb({result:result})
			})
			this.end()
		})
	})
	return await new_query(q)
}