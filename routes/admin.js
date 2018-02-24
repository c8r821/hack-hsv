const express = require('express');
const router = express.Router();
const schemas = require('../database/schemas');

router.get('/', async function(req, res) {
    let materials = await schemas.materials.find({});
    let submarines = await schemas.submarines.find({});
    res.render('admin/index', {title: "Administration", materials, submarines});
});

router.post('/materials/delete', function(req, res) {
    schemas.materials.remove({name: req.body.toDel}, function(err, doc) {
        if (err)
            res.json(err);
        else
            res.redirect('back');
    })
});

router.post('/materials/add', function(req, res) {
    schemas.materials.create({
        name: req.body.name,
        yieldStrength: req.body.ys
    });

    res.redirect('back');
});

router.post('/submarines/delete', function(req, res) {
    schemas.submarines.remove({name: req.body.toDel}, function(err, doc) {
        if (err)
            res.json(err);
        else
            res.redirect('back');
    })
});

router.post('/submarines/add', async function(req, res) {
    let material = await schemas.materials.findOne({name: req.body.material});
    schemas.submarines.create({
        name: req.body.name,
        material,
        hullThickness: req.body.hullThickness,
        radius: req.body.radius
    });

    res.redirect('back');
});

module.exports = router;