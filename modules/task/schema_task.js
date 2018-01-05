var mongoose = require('mongoose');
var datetime = require('node-datetime');

//create task schema
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    createdBy: {
        type: String,
        required: true,
    },
    taskName: String,
    description: String,
    date: { type: Date, default: Date.now },
    time_stamp: { type: String, default: datetime.create(Schema.date)._created }
});

//export this module
module.exports = mongoose.model('Task', taskSchema);  