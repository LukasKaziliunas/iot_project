var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();


router.get('/', function(req, res, next) {
    var context = {};
    context['title'] = "lamp control panel";

    fetch('http://192.168.1.15:85/?lamp')
    .then((response) => {
        response.json().then((data) => { 
            console.log(data.state);
            context['state'] = data.state;
            res.render('lamp', context);
        });
    })
    .catch((err) => { console.log(err);
                    context['error'] = err;
                    res.render('lamp', context);
    });

});

module.exports = router;
