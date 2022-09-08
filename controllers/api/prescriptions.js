const Prescription = require('../../models/prescription');

module.exports = {
    create,
    getAll,
    deletePrescription
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

async function deletePrescription(req, res, next) {
    try {
        const deletedPrescription = await Prescription.findByIdAndDelete({'_id': req.params.id, 'user': req.user_id});
        res.json(deletedPrescription);
    } catch (err) {
        return next(err);
    }
}