const Prescription = require('../../models/prescription');

module.exports = {
    create,
    getAll,
};

async function getAll(req, res) {
    const prescriptions = await Prescription.find({ user: req.user._id, }).sort('-updatedAt');
    res.json(prescriptions);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const prescription = await Prescription.create(req.body);
    res.json(prescription);
}