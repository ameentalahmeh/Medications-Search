const express = require('express');

const  DrugsController  = require('./api/controllers/DrugsInfoController.js');

const router = express.Router();

router.get('/getDrugsInfo', DrugsController);

module.exports = router;
