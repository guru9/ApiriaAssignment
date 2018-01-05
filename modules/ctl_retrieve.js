var Emp = require('./schema_emp.js');

//get all Employees
module.exports.retrieveEmp = function (req, res) {

    Emp.find(function (err, emp) {
        if (err) {
            res.status(401).json(err);
        }
        res.status(200).json(emp);
    });
}

