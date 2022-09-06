const express = require('express');
const router = express.Router();
const logsCtrl = require ('../../controllers/api/logs');

router.get('/', logsCtrl.getAll);

router.post('/', logsCtrl.create);

module.exports = router;