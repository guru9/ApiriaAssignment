var Task = require('./schema_task.js');

module.exports.deleteTask = function (req, res) {
    // res.send('remove endpoint');
    var query = { '_id': req.body.id };

    Task.deleteOne(query, (err, success) => {

        if (err) {
            res.status(401).json(err);
        }
        res.json('success');
    });
}

