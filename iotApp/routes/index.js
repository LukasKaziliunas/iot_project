var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var context = { title: 'Devices' };
  res.render('index', context);
});

module.exports = router;
