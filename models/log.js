const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const logSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    vitals: { type: String, default: 'N/A' },
    notes: { type: String, default: 'N/A' },
    date: { type: Date, default: 'N/A'},
    meridiem: { 
        type: String,
        enum: ['N/A', 'AM', 'PM']
    },
    prescriptions: [{ type: Schema.Types.ObjectId, ref: 'Prescription'}]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Log', logSchema);