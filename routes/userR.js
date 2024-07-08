const {handlesignup,handlelogin} = require('../cont/userC.js')
const express = require('express')
const userroute = express.Router();

userroute.post('/',handlesignup);  //send data using a form and store it in database 

userroute.post('/login',handlelogin);   // from the form -> /user/login


module.exports = userroute