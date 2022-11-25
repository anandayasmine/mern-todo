const express = require('express')
const mongoose = require('mongoose')

const List = require('../models/List')
const ListController = require('../controllers/List')

const router = express.Router()

// === get all list ===

router.get("/", async (req, res) => {
  	try{
  		const allList = await List.find()
  		res.json(allList)
  	}catch(err){
  		res.json({message: err})
  	}
})

// === update specific user ===

router.patch("/upd/:listId", ListController.updateList)

// === Create New List ===

router.post("/add", ListController.addList)


// === Delete List ===

router.delete("/del/:listId", ListController.deleteList)


module.exports = router