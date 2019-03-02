//create router for emp
var express = require('express');
var router = express.Router();

//router controller- endpoints
var upload = require('./ctl_upload.js');
var retrieve = require('./ctl_retrieve.js');

router.post('/upload', upload.uploadFile);
router.get('/allEmployees', retrieve.retrieveEmp);

//export this router
module.exports = router;
