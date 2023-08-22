const todoModel = require('../model/todo.cjs')


exports.getAllItems = async function ( req,res){
    try{  
     const Items = await todoModel.find()
     
     return res.json({"message":"Done",data:Items})
    } catch (err) {
      return res.status(400).send({message:err})
    }
    }
exports.addNewItem = async function ( req,res){
    try{  
        const createItem = await todoModel.create(req.body.item)
        const saveItem = await createItem.save()
        return res.json({"message":"Item added Successfully",data:createItem})
    } catch (err) {
        return res.status(400).send({message:err})
    }
    }
exports.updateItem = async function ( req,res){
    try{  
        await todoModel.findByIdAndUpdate(req.params.id,req.body)
        return res.json({"message":"Item Updated Successfully",data:[]})
    } catch (err) {
        return res.status(400).send({message:err})
    }
    }
exports.deleteItem = async function ( req,res){
    try{  
        await todoModel.findByIdAndDelete(req.params.id)
        return res.json({"message":"Item Deleted Successfully ",data:[]})
    } catch (err) {
        return res.status(400).send({message:err})
    }
    }