var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {  //localhost:3000' e get isteği gelirse
    res.json({
        success: true
    });
});

module.exports = router;
