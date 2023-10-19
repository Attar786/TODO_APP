const ToDomodel = require("../models/tdmodels.js")

module.exports.getToDo = async (req,res)=>
{
    const todo = await ToDomodel.find()
    res.send(todo);
}


module.exports.saveToDo = async (req,res)=>
{
const {text} = req.body
ToDomodel.create({text}).then((data)=>{
console.log("added successfully");
console.log(data);
res.send(data)
})
   
}