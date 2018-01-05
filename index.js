const express = require('express');
const path = require('path');
// var cors = require('cors');

var upload = require('express-fileupload');

//add router file
const FileUpload = require('./modules/router.js');


//add db-connection file
require('./config/db_connect.js');

const app = express();

// app.use(cors());

app.use(upload());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public'));
});
//static files
app.use(express.static(path.join(__dirname, 'public')));

//add body-parser
// var bodyParser = require('body-parser');

//use body-parser for json and urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());



//use Router
app.use('/', FileUpload);              // localhost:3000/fileupload

//set port
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.log('Error:' + err);
    }
    console.log(`app listenig on port: ${PORT}`);
});

