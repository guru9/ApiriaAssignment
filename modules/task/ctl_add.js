var Task = require('./schema_task.js');
module.exports.addTask = function (req, res, next) {
    // res.send('add task endpoint');
    // create taskInfo
    var newTask = new Task({
        createdBy: req.body.createdBy,
        taskName: req.body.taskName,
        description: req.body.description
    });

    Task.create(newTask, function (err, doc) {

        if (err) {
            res.status(401).json(err);
        }
        res.status(201).json(doc);
    });

}