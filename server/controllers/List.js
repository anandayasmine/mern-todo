const List = require('../models/List')
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

exports.addList = async (req, res) => {
  	try{
    	// console.log(req.body)
    	const list = new List({
    		content: req.body.content,
        isDone: req.body.isDone,
    		// password: req.body.password
    	})
      // console.log('=======')
      console.log('=======')
      console.log('list : ', list.content)
     
          let data = await list.save();
          res.status(201).json({ data });
          console.log('List Sucessfully added')
        
    } catch (err) {
      res.status(400).json({ err: err });
    }
}

exports.getAllList = async (req, res) => {
	console.log('list',List)
  await res.json(req.List);
};

exports.updateList = async (req, res) => {
    try{
      const updatedList = await List.updateOne(
          {_id: req.params.listId},
          {$set: {
            content: req.body.content,
            isDone: req.body.isDone
          }}
        )
      res.json(updatedList)
      console.log('list Sucessfully updated')
      // console.log('list updated content: ', list.content)
      // console.log('list updated isDone: ', list.isDone)

    }catch(err){
      res.status(400).json({err: err})
    }
}
exports.deleteList = async (req, res) => {
    try{
      const deletedList = await List.remove({
        _id: req.params.listId
      })
      console.log('list Sucessfully Deleted:',req.params.listId)
      res.json(deletedList)

    }catch(err){
      res.json({message: err})
    }
}