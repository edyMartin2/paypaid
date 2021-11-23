var express = require('express');
var router = express.Router();
//service 
var { HomeResponse } = require('../../services/HomeService')


/* GET users listing. */
router.get('/', (req, res) => {
    HomeResponse(req, res)
});

module.exports = router;