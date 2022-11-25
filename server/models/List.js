const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('./User')

const ListSchema = new mongoose.Schema({
	content:{
		type: String,
		required: [true, "Please Include your content"]
	},
	isDone:{
		type: Boolean,
		required: true
	},
	// user_id:{
	// 	type: String,
	// 	required: true
	// },
	// tokens: [
	//     {
	//       token: {
	//         type: String,
	//         required: true
	//       }
	//     }
	// ], 
})
// ListSchema.pre("save", async function(next) {
//   const list = this;
//   //need to find user logged in
//   list.user_id = User.email
//   // if (user.isModified("password")) {
//   //   user.password = await bcrypt.hash(user.password, 8);
//   // }
//   next();
// });
// ListSchema.statics.findUserId = async()=>{
// 	const user = await User.findOne({})
// }

// this method search for a user by email and password.
// ListSchema.statics.findByCredentials = async (email, password) => {
//   const user = await List.findOne({ email });
//   if (!user) {
//     throw new Error({ error: "Invalid login details" });
//   }
//   const isPasswordMatch = await bcrypt.compare(password, user.password);
//   if (!isPasswordMatch) {
//     throw new Error({ error: "Invalid login details" });
//   }
//   return user;
// };

const List = mongoose.model('List',ListSchema)
module.exports = List