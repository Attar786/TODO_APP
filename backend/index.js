const express = require('express');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();

const PORT = process.env.port || 5000;

mongoose.connect(process.env.MONGOURL)
.then(()=>
{
    console.log(`Connected to data bases of mongo db`)
}).catch((err)=> console.log(err))
app.listen(PORT, ()=> console.log(`app lining on = ${PORT}`))


