
const express = require('express');
const router2 = express.Router();
const {timeandred} = require('../cont/urlC')

router2.get('/:shortId',timeandred)

module.exports=  router2