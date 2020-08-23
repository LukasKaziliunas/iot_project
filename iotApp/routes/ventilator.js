var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var context = {};
    context['title'] = 'Ventilator Control Panel';
    res.render('ventilator', context);
});

module.exports = router;
