var mongoose = require('mongoose');
// var datetime = require('node-datetime');

//create task schema
var Schema = mongoose.Schema;

var empSchema = new Schema({
    empName: String,
    empCompany: String,
    empSalary: Number,
    empAddress: String,
    date: { type: Date, default: Date.now },
    // time_stamp: { type: String, default: datetime.create(Schema.date)._created }
});

//export this module
module.exports = mongoose.model('Employee', empSchema);  
