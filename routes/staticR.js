const express =require('express');
const strouter =  express.Router();
const urlmodel =  require('../models/urls.js')
strouter.get('/',async (req,res)=>
{
    const url = await urlmodel.find({});
    return res.render('home.ejs',{url:url});
    
})


module.exports = strouter