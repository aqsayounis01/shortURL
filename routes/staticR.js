const express =require('express');
const strouter =  express.Router();
const urlmodel =  require('../models/urls.js')

strouter.get('/',async (req,res)=>
{
    console.log(req.user);
    if(!req.user) return res.redirect('/login');
    const url = await urlmodel.find({createdBy:req.user._id});
    return res.render('home.ejs',{url:url});
    
})

strouter.get('/signup',(req,res)=>
{
    return res.render('signup.ejs')
})

strouter.get('/login',(req,res)=>
{
    return res.render('login.ejs')
})


module.exports = strouter