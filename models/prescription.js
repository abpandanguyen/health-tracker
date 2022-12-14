const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    rxName: { type: String, require: true },
    class: { type: String, require: true },
    dose: { type: String, require: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Prescription', prescriptionSchema);

