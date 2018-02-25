const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', styling: "min-height: 715vh; background-color: #91d5ff; background-image: url('/images/background.svg'); background-size: contain; background-position: 0 50vh; background-repeat: no-repeat"});
});

router.get('/levels', function(req, res, next) {
    res.render('levels', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/dsc', function(req, res, next) {
    res.render('dsc', { title: 'Express' });
});
module.exports = router;
