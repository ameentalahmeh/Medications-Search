const express = require('express');

const  MedicationsController  = require('./api/controllers/MedicationsInfoController.js');
const  ErrorsController  = require('./api/controllers/ErrorsController.js');

const router = express.Router();



router.get('/api/getMedicationsInfo', MedicationsController);

router.use(ErrorsController.serverError);
router.use(ErrorsController.errorNotFound);

module.exports = router;
