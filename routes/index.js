const express = require('express');
const router = express.Router();
const schemas = require('../database/schemas');

/* GET home page. */
router.get('/', async function(req, res, next) {
    let materials = await schemas.materials.find();
    let submarines = await schemas.submarines.find();
    res.render('index', { title: 'Express', materials, submarines});
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
