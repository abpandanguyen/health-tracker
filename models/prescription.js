const mongoose = require('mongoose');

// Ensure that the Category model is processed by Mongoose
// so that the Item's populate method will work

const prescriptionSchema = require('./prescriptionSchema');

module.exports = mongoose.model('Prescription', prescriptionSchema);

