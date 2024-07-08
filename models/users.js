const mongoose = require('mongoose');

const usersch = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String ,
        required: true ,
        unique:true 
    },
    password:
    {
        type:String,
        required:true,

    }
},{timestamp:true})

const usermodel = mongoose.model('users',usersch)

module.exports = usermodel