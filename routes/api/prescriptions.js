const express = require('express');
const router = express.Router();
const prescriptionsCtrl = require ('../../controllers/api/prescriptions');

router.get('/', prescriptionsCtrl.getAll);

router.post('/', prescriptionsCtrl.create);

router.delete('/:id', prescriptionsCtrl.deletePrescription);

module.exports = router;