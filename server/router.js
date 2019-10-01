const express = require('express');

const  MedicationsController  = require('./api/controllers/MedicationsInfoController.js');
const ErrorsControllers = require('./api/controllers/ErrorsControllers.js');

const router = express.Router();



router.get('/api/getMedicationsInfo', MedicationsController);

router.use(ErrorsControllers.errorNotFound)
router.use(ErrorsControllers.serverError)

module.exports = router;
