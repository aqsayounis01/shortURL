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
        ]
           
            
        
    });

const urlmodel = mongoose.model('urlmodel',urlsch)

module.exports = urlmodel