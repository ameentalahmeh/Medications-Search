const express = require('express');

const  MedicationsController  = require('./api/controllers/MedicationsInfoController.js');

const router = express.Router();

router.get('/api/getMedicationsInfo', MedicationsController);


module.exports = router;
