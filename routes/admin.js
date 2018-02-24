const express = require('express');
const router = express.Router();
const schemas = require('../database/schemas');

router.get('/', function(req, res) {
    schemas.find({}, function(err, docs) {
        if (err)
            res.json(err);
        else
            res.render('admin/index', {title: "Administration", materialTypes: docs});
    })
});

router.post('/materials/delete', function(req, res) {
    console.log(req.body.toDel);
    schemas.remove({name: req.body.toDel}, function(err, doc) {
        if (err)
            res.json(err);
        else
            res.redirect('back');
    })
});

router.post('/materials/add', function(req, res) {
    schemas.create({
        name: req.body.name,
        yieldStrength: req.body.ys
    });

    res.redirect('back');
});

module.exports = router;