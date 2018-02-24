const mongoose = require('mongoose');

const mongoUser = 'hack-hsv';
const mongoPass = 'O9w3&V8KD2';

mongoose.connect(`mongodb://${mongoUser}}:${mongoPass}@ds247178.mlab.com:47178/hack-hsv`);

module.exports = mongoose.connection;