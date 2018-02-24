const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
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
