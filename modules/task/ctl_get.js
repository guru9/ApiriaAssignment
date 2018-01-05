var Task = require('./schema_task.js');

//get all task
module.exports.getAllTask = function (req, res) {
    // res.send('get task endpoint');
    Task.find(function (err, task) {
        if (err) {
            res.status(401).json(err);
        }
        res.status(200).json(task)
    });
}

//get task by username
module.exports.getTaskByUser = function (req, res) {

    Task.find(req.params, function (err, task) {
        if (err) {
            res.status(401).json(err);
        }
        res.status(200).json(task)
    });
}

//get task before given time
module.exports.getTaskBeforeTime = function (req, res) {

    Task.find({}).where('time_stamp').lte(req.params.time_given).exec(function (err, task) {

        if (err) {
            res.status(401).json(err);
        }
        res.status(200).json(task);
    });

}

//get task after given time
module.exports.getTaskAfterTime = function (req, res) {

    Task.find({}).where('time_stamp').gte(req.params.time_given).exec(function (err, task) {

        if (err) {
            res.status(401).json(err);
        }
        res.status(200).json(task);
    });

}




//*note: (node:6136) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated,
// plug in your own promise library instead: http://mongoosejs.com/docs/promises.html