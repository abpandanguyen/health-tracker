const Log = require('../../models/log');

module.exports = {
    create,
    getAll,
    deleteLog,
};

async function getAll(req, res) {
    console.log(req.user);
    const logs = await Log.find({ user: req.user._id, }).sort('-updatedAt').populate('prescriptions').exec();
    res.json(logs);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const log = await Log.create(req.body);
    res.json(log);
}

async function deleteLog(req, res, next) {
    try {
        const deletedLog = await Log.findByIdAndDelete({'_id': req.params.id, 'user': req.user_id});
        res.json(deletedLog);
    } catch (err) {
        return next(err);
    }
}