const express = require('express');

const  MedicationsController  = require('./api/controllers/MedicationsInfoController.js');
const  ErrorsController  = require('./api/controllers/ErrorsController.js');
const auth = require('./api/controllers/AuthController.js');


const router = express.Router();



router.get('/api/getMedicationsInfo', auth, MedicationsController);

router.use(ErrorsController.errorNotFound);
router.use(ErrorsController.serverError);
module.exports = router;
