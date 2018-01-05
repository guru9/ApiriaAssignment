//create router for task module
var express = require('express');
var router = express.Router();

//router controller- endpoints
// var get = require('./ctl_get.js');
var add = require('./ctl_add.js');
// var edit = require('./ctl_edit.js');
// var remove = require('./ctl_remove.js');

router.post('/addTask', add.addTask);

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