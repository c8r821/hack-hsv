const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./index');

const material = new Schema({
    name: String,
    yieldStrength: Number // In MPA
});

const materials = mongoose.model('material', material);

const submarine = new Schema({
    name: String,
    material: {type: material},
    length: Number,
    radius: {type: Number, required: true}
});

module.exports = materials;
