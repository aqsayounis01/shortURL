// post => this request will send the actual url and return the url with shord id

const express = require('express');
const router = express.Router();
const {generateurl,getclicks} = require('../cont/urlC')

router.post('/', generateurl)

router.get('/analytics/:shortId',getclicks);



module.exports= router