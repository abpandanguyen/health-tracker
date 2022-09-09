const Log = require('../../models/log');

module.exports = {
    create,
    getAll,
    deleteLog,
    updateLog,
};

async function getAll(req, res) {
    const logs = await Log.find({ user: req.user._id, }).sort('-updatedAt').populate('prescriptions').exec();
    res.json(logs);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const log = await Log.create(req.body);
    const logs = await Log.find({ user: req.user._id, }).sort('-updatedAt').populate('prescriptions').exec();
    res.json(logs);
}

async function updateLog(req, res) {
    await Log.findOneAndUpdate(
        {"log._id": req.params._id},
        req.body,
        {new: true},
    )
    const logs = await Log.find({ user: req.user._id, }).sort('-updatedAt').populate('prescriptions').exec();
    res.json(logs)
}

async function deleteLog(req, res, next) {
    try {
        const deletedLog = await Log.findByIdAndDelete({'_id': req.params.id, 'user': req.user_id});
        res.json(deletedLog);
    } catch (err) {
        return next(err);
    }
}