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

module.exports.updatetodo = async (req, res) =>{
    const{_id, text} = req.body
    ToDomodel.findByIdAndUpdate(_id,{text}).then(()=> res.send("updated Successfully..."))
    .catch((err)=> console.log(err))
}


module.exports.deletetodo = async (req, res) =>{
    const{_id} = req.body
    ToDomodel.findByIdAndDelete(_id).then(()=> res.send("Deleted Successfully..."))
    .catch((err)=> console.log(err))
}