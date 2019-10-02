const express = require('express');

const  MedicationsController  = require('./api/controllers/MedicationsInfoController.js');
const  ErrorsController  = require('./api/controllers/ErrorsController.js');


const router = express.Router();



router.get('/api/getMedicationsInfo', MedicationsController);

router.use(ErrorsController.errorNotFound);
router.use(ErrorsController.serverError);

module.exports = router;
