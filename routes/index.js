const express = require('express');
const router = express.Router();
const schemas = require('../database/schemas');

/* GET home page. */
router.get('/', async function(req, res, next) {
    let materials = await schemas.materials.find();
    let submarines = await schemas.submarines.find();
    res.render('index', { title: 'Home', materials, submarines /* styling: "min-height: 750vh; background: #91d5ff; /* background-image: url('/images/background.svg'); background-size: contain; background-position: 0 30rem; background-repeat: no-repeat "*/});
});

router.get('/levels', function(req, res, next) {
    res.render('levels', { title: 'Levels', styling: "background-color: #91d5ff"});
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About' });
});

router.get('/dsc', function(req, res, next) {
    res.render('dsc', { title: 'DSC' });
});


module.exports = router;
