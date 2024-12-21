const express = require('express');
const {getAmharic, getDhaAnywaa, getEnglish} = require('../controller/bibleControl')
const router = express.Router();

// english 
router.get('/eng/:testement/:book/:version', getEnglish)
// get dha anywaa
router.get('/any/:testement/:book', getDhaAnywaa)
// get amharic
router.get('/amh/:book', getAmharic)
// homepage 
// router.get('/',homePage)


module.exports = router;