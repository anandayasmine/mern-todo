
// === App Initialization ===

const express = require('express'); 
const app = express(); // instantiate express


// === Server Start ===

require('dotenv/config')
const port = process.env.PORT
app.listen(port,()=>console.log('Server Start : http://localhost:',port))



// === Database Connect ===

const connectDB = require('./db/connection')
const db = connectDB()

const hey = async()=>await console.log(db)


// === Middleware (USE) ===

	// === MW: Pass through CORS ===
	const cors = require('cors')
	app.use(cors())


	// === MW: Read json from body ===
	const bodyParser = require('body-parser')
	app.use(bodyParser.json())


	// === MW: Config Express json ===
	app.use(express.json({extended: false}))


	// === MW: MODELS ===
	app.use('/u',require('./routes/User'))
	app.use('/list',require('./routes/List'))
	// app.use('/ou',require('./routes/OtherUser'))

