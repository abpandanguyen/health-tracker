const Log = require('../../models/log');

module.exports = {
    create,
    getAll,
};

async function getAll(req, res) {
    console.log(req.user);
    const logs = await Log.find({ user: req.user._id, }).sort('-updatedAt');
    res.json(logs);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const log = await Log.create(req.body);
    res.json(log);
}