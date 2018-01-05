var datetime = require('node-datetime');

var Task = require('./schema_task.js');


module.exports.editTask = function (req, res) {
    // res.send('edit endpoint');

    var taskInfo = {
        createdBy: req.body.createdBy,
        taskName: req.body.taskName,
        description: req.body.description,
        date: new Date(),
        time_stamp: datetime.create(new Date())._created
    };

    var query = { '_id': req.body.id };

    Task.update(query, taskInfo, function (err, doc) {

        if (err) {
            res.status(401).json(err);
        }
        res.status(200).json(doc);
    });

}
