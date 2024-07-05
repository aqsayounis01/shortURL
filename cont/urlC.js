const shortid  = require('shortid')   //predefined module in nodejs 
const urlmodel = require("../models/urls.js")

async  function generateurl(req,res)
{
    if(!req.body.url)     //this .url is the attribute that we will recieve in boby raw in post request (attribute of the json object that we pass)
    {
        // return res.status(400).json({error:"url is required"})
        return res.render('error.ejs');
    }

    //check if url exists or not 
    const check = await urlmodel.find({redirectURL : req.body.url})
    if(check.length)
    {
        return res.send('id exists')
    }


    let shortID = shortid();
    await urlmodel.create({
        shortId: shortID,
        redirectURL:req.body.url,
        // visitHistory:[{}]

    })


    // return res.json({id:shortID})
    return res.render('home.ejs',{id:shortID,redirectURL:req.body.url})





}

async function getclicks(req,res)
{
    const shortId = req.params.shortId;
    const result = await urlmodel.findOne({shortId:shortId})
            
    //  return res.json({
    //     Tclicks: result.visitHistory.length,
    //     info: result.visitHistory
    //  })
    return res.render('home.ejs',{Tclicks:result.visitHistory.length,result})
}

async function timeandred(req, res)
{
    // console.log(req.params)
    if(!req.params.shortId)
    {
        res.send('error')
    }
    const shortId = req.params.shortId;
    const entry = await urlmodel.findOneAndUpdate({
        shortId
    
    },
    {
        $push:
        {
            visitHistory: {timestamp: Date.now()}
        }
    })
  
     return res.redirect(entry.redirectURL);
}


module.exports=
{
    generateurl,
    timeandred,
    getclicks
}