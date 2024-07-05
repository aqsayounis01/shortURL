const express = require('express');
const app= express();
const {connect} =require('./connect.js')
const router = require ('./routes/urlR.js')
const router2 = require ('./routes/idR.js')
const strouter =  require('./routes/staticR.js')
connect("mongodb://127.0.0.1:27017/urldatabase").then(()=>{console.log('monogo started')})
app.use(express.json())  // middleware before route because it has to parse the url only then the controller will work
app.use(express.urlencoded({extended:false}))  // used to parse the form data 

app.use('/url',router)
app.use('/',strouter);
app.use('/id',router2)   // for get req on the id 


app.listen(3000,()=>
{
    console.log("server started");
})
