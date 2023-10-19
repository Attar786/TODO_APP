const express = require('express');
const mongoose = require('mongoose')
const router =require('./routes/todo.js')
const cors = require("cors")


require('dotenv').config();

const app = express();

const PORT = process.env.port || 5000;
app.use(express.json())
app.use(cors());
mongoose.connect(process.env.MONGOURL)
.then(()=>
{
    console.log(`Connected to data bases of mongo db`)
}).catch((err)=> console.log(err))

app.use(router)
app.listen(PORT, ()=> console.log(`app lining on = ${PORT}`))


