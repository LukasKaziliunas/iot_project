var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var context = { title: 'watering system' };
    res.render('wateringSystem', context);
});

module.exports = router;
