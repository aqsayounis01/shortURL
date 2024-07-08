const usermodel = require('../models/users.js');
const {v4:uuidv4}= require('uuid')
const {setuser} = require('../service/Auth.js')
async function handlesignup(req,res,next)
{
    const {name, email, password} = req.body
    await usermodel.create({
        name:name,
        email:email,
        password:password
    })
    return res.redirect('/')   // we will be redirected to home page after the user is created 

}


async function handlelogin(req,res,next)
{
    const {email,password}= req.body;
    const user = await usermodel.findOne({email:email,password:password});

    if(!user) return res.render('error.ejs',{error:'invalid email or password'});

// if correct 
const sid = uuidv4();
setuser(sid,user);
res.cookie('uid',sid);   // this is to create a  cookie (we can give any name instead of uid) (inspect>storage>cookies)

    return res.redirect('/');
}

module.exports = {
    handlesignup,
    handlelogin
}