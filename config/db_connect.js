var mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/fileMaster', {
    useMongoClient: true
});


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', __ => {
    console.log('mongodb connected')
});