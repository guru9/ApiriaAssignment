var Emp = require('./schema_emp.js');

var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");

module.exports.uploadFile = function (req, res) {

    var uploadpath = './uploads/';

    if (req.files.upfile) {
        var file = req.files.upfile;

        if (file.name.split('.')[file.name.split('.').length - 1] === 'xlsx') {
            exceltojson = xlsxtojson;
            console.log('yes--->' + file.name);
            doUpload(uploadpath, file.name)
        } else {
            exceltojson = xlstojson;
            console.log('no--->' + file.name);
            doUpload(uploadpath, file.name)
        }

    }
    else {
        console.log('no file selected!')
        res.send("No File selected !");

        res.end();
    };

    function doUpload(uppath, name) {
        var movedPath = uppath + name;
        console.log(movedPath)

        file.mv(movedPath, function (err) {
            if (err) {
                console.log("File Upload Failed", name, err);
                res.send("Error Occured!" + err)
            }
            else {
                doJson(movedPath);
                console.log("File Uploaded", name);
            }

        });

    }

    function doJson(filePath) {
        console.log(filePath);
        try {
            exceltojson({
                input: filePath,
                output: null,
                lowerCaseHeaders: true
            }, function (err, result) {
                if (err) {
                    return res.json({ error_code: 1, err_desc: err, data: null });
                }
                res.json({ error_code: 0, err_desc: null, data: result });
                console.log(result)
                doStore(result);
            });
        } catch (e) {
            res.json({ error_code: 1, err_desc: "Corupted excel file" });
        }
    }

    function doStore(uploadedFile) {
        for (var i = 0; i < uploadedFile.length; i++) {
            var empdata = uploadedFile[i];
            console.log(empdata.name)

            // create empInfo
            var newEmp = new Emp({
                empName: empdata.name,
                empCompany: empdata.company,
                empSalary: empdata.salary,
                empAddress: empdata.address,
            });

            Emp.create(newEmp, function (err, doc) {

                if (err) {
                    console.log('employee adding error' + err);
                }
                console.log('employee added successfully' + doc);
            });
        }
    }

}