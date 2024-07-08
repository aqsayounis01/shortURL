const express = require('express');
const cookieParser = require('cookie-parser')
const app= express();
const {connect} =require('./connect.js')

const router = require ('./routes/urlR.js')
const router2 = require ('./routes/idR.js')
const userroute = require('./routes/userR.js')
const strouter =  require('./routes/staticR.js')

const {restrictToLoggedInUserOnly,checkAuth} = require('./middleware/auth.js')
connect("mongodb://127.0.0.1:27017/urldatabase").then(()=>{console.log('monogo started')})
app.use(express.json())  // middleware before route because it has to parse the url only then the controller will work
app.use(express.urlencoded({extended:false}))  // used to parse the form data

app.use(cookieParser());

app.use('/',checkAuth,strouter);   // checkAuth so that it gets req.user and it can use it in '/' home page (later on in strouter it checks actually) 
app.use('/url',restrictToLoggedInUserOnly,router)
app.use('/id',router2);   // for get req on the id 
app.use('/user',userroute);

app.listen(3000,()=>
{
    console.log("server started");
})
