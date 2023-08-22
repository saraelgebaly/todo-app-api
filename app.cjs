const bodyParser = require('body-parser')
const express = require('express')
const mongoose =  require('mongoose')
const cors = require('cors');
const todoRouter = require('./Routes/todo.cjs')

const app = express()
app.use(bodyParser.json())
app.use(cors())
const url= "mongodb+srv://Sara:123mag123@cluster0.lnievur.mongodb.net/mag?retryWrites=true&w=majority"
const connectDB =async()=>{
    try {
        mongoose.set('strictQuery',false)
        mongoose.connect(url)
        console.log("Connected to Mongo DB")
    } catch(err){
        console.log("error while connect to mongo"+ err) 
        process.exit() 
    }
}
connectDB()
app.use('/' , todoRouter)



app.listen(8000)
