var express = require('express');
var router = express.Router();
var ctrlMain = require('../contollers/main')



/* GET home page. */
router.get('/', function(req, res, next) {
    router.get('/', ctrlMain.index);  
});

module.exports = router;
