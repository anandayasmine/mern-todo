const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const User = require('../models/User')
const UserController = require('../controllers/User')
const auth = require('../authjwt')


// === get all user ===

router.get("/", async (req, res) => {
  	try{
  		const allUser = await User.find()
  		res.json(allUser)
  	}catch(err){
  		res.json({message: err})
  	}
})

// === get specific user ===

router.get("/:userId", async (req, res) => {
  	try{
  		const specificUser = await User.findById(req.params.userId)
  		res.json(specificUser)
  	}catch(err){
  		res.json({message: err})
  	}
})

// === delete specific user ===

router.delete("/:userId", async (req, res) => {
  	try{
  		const removedUser = await User.remove({_id: req.params.userId})
  		res.json(removedUser)
  	}catch(err){
  		res.json({message: err})
  	}
})

// === update specific user ===

router.patch("/:userId", async (req, res) => {
  	try{
  		const updatedUser = await User.updateOne(
	  			{_id: req.params.userId},
	  			{$set: {password: req.body.password}}
  			)
  		res.json(updatedUser)
  	}catch(err){
  		res.json({message: err})
  	}
})

// === Create New User ===

router.post("/reg", UserController.registration)

// === Login ===

router.post("/login", UserController.login)

// router.get("/me", auth, UserController.getUserDetails);


module.exports = router