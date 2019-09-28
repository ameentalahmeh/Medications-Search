const express = require('express');

const  DrugsController  = require('./api/controllers/DrugsInfoController.js');
const  ErrorControllers  = require('./api/controllers/ErrorControllers.js');

const router = express.Router();

router.get('/api/getDrugsInfo', DrugsController);

router.use(ErrorControllers.pageNotFound);
router.use(ErrorControllers.serverError);

module.exports = router;
