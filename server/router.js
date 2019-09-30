const express = require('express');

const  MedicationsController  = require('./api/controllers/MedicationsInfoController.js');
const  ErrorControllers  = require('./api/controllers/ErrorControllers.js');

const router = express.Router();

router.get('/api/getMedicationsInfo', MedicationsController);

router.use(ErrorControllers.serverError);

module.exports = router;
