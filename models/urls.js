const mongoose = require('mongoose');

const urlsch = new mongoose.Schema(
    {
        shortId:
        {
            type:String,
            required:true,
            unique:true
        },
        redirectURL:
        {
            required:true,
            type:String,
            

        },
        visitHistory:[
            {
                timestamp:
                {
                    type:Number
                }
            }
        ],

        createdBy:     // for different urls in different accounts (did after authentication)
        {
            type:mongoose.Schema.Types.ObjectId,        // can access it using _id later 
            ref:'users'    // refers to users collection
        }
           
            
        
    });

const urlmodel = mongoose.model('urlmodel',urlsch)

module.exports = urlmodel