const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./index');

const material = new Schema({
    name: String,
    yieldStrength: Number, // In MPA
    pricePerPound: Number,
    density: Number
});

const materials = mongoose.model('material', material);

const submarine = new Schema({
    name: String,
    material: {type: material},
    hullThickness: Number,
    radius: {type: Number, required: true}
});

const submarines = mongoose.model('submarine', submarine);

const level = new Schema({
    name: String,
    level: Number
});

const levels = mongoose.model('level', level);

module.exports = {
    materials,
    submarines,
    levels
};
