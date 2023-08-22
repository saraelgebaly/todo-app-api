const mongoose = require ('mongoose')
const Schema = require('mongoose').Schema

const todoSchema = new Schema ({
item: {
    type:String,
    required: true
}
    
}) 
module.exports= mongoose.model('Items',todoSchema)