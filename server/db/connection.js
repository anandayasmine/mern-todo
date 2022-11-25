const mongoose = require('mongoose');
require('dotenv/config')
const URI = process.env.DB_CONNECTION
// const client = 

const connectDB = async() => {
	try{
		await mongoose.connect(URI,{
			useUnifiedTopology: true,
			useNewUrlParser: true
		})
		// await listDatabases(client);
		console.log('Database Connected Sucessfully !')
	}
	catch(err){
		console.error(err)
	}
// 	finally {
// 	    await client.close();
// 	}
}

module.exports = connectDB

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };