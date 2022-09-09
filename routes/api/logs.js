const express = require('express');
const router = express.Router();
const logsCtrl = require ('../../controllers/api/logs');

router.get('/', logsCtrl.getAll);

router.post('/', logsCtrl.create);

router.delete('/:id', logsCtrl.deleteLog);

router.put('/update/:id', logsCtrl.updateLog);

module.exports = router;