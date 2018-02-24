const mongoose = require('mongoose');

const mongoUser = 'user';
const mongoPass = 'user123';

mongoose.connect(`mongodb://${mongoUser}:${mongoPass}@ds247178.mlab.com:47178/hack-hsv`);

module.exports = mongoose.connection;