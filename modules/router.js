//create router for task module
var express = require('express');
var router = express.Router();


// var upload = require('express-fileupload');
// var xlstojson = require("xls-to-json-lc");
// var xlsxtojson = require("xlsx-to-json-lc");
//router controller- endpoints
// var get = require('./ctl_get.js');
var upload = require('./ctl_upload.js');
var retrieve = require('./ctl_retrieve.js');

// var edit = require('./ctl_edit.js');
// var remove = require('./ctl_remove.js');
// router.use(upload());

router.post('/upload', upload.uploadFile);
router.get('/allEmployees', retrieve.retrieveEmp);

// router.post('/upload', function (req, res) {
//     // console.log(req.files);

// })

// //get allTsk
// router.get('/allTask', get.getAllTask);

// //get task by username
// router.get('/user/:createdBy', get.getTaskByUser);

// //get task by date
// router.get('/before/:time_given', get.getTaskBeforeTime);

// //get task by date
// router.get('/after/:time_given', get.getTaskAfterTime);

// //add task
// router.post('/addTask', add.addTask);

// //edit task
// router.put('/editTask', edit.editTask);

// //remove task
// router.delete('/removeTask', remove.deleteTask);

//export this router
module.exports = router;