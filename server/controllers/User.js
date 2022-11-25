const User = require('../models/User')
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

exports.registration = async (req, res) => {
  	try{
    	// console.log(req.body)
    	const user = new User({
    		name: req.body.name,
        email: req.body.email,
    		password: req.body.password
    	})
      // console.log('=======')
      // console.log('=======')
      // console.log('user : ', user.email)
      let isExist
      try{
        const userExist = await User.findOne({email: user.email}, 
          function(err,obj) { 
            isExist=obj
          });

      }finally{
        if(isExist){//if null ==> masuk ke else
          res.status(400).json({ err: 'email already exist' });
          // console.log('email already exist')
        }else{
          let data = await user.save();
          const token = await user.generateAuthToken(); // here it is calling the method that we created in the model
          res.status(201).json({ data, token });
          // console.log('Sucessfully aded')
        }
      }
    } catch (err) {
      res.status(400).json({ err: err });
    }
}

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).json({ error: "Login failed! Check authentication credentials" });
    }
    // const token = await user.generateAuthToken();
    const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
}

exports.getUserDetails = async (req, res) => {
	console.log('user',User)
  await res.json(req.User);
};