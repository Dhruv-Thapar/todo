const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://dhrvthpr:Mongo123456789@cluster0.0c8ckrv.mongodb.net/")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema)
module.exports={
    todo
}