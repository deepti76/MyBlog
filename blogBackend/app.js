require('./config/config');
require('./models/db');

const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const { LOG_DEBUG } = require('karma/lib/constants');

var routes=require('./routes/routes')
var app=express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api',routes)

app.listen(process.env.PORT,()=>{
    console.log(`Server started at:${process.env.PORT}`);
})