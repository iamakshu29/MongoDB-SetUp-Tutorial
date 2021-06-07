// Require the library
const mongoose = require('mongoose');

// connect to dataBase
mongoose.connect('mongodb://localhost/practice_db');

// acquire the connection (to check if is is successful)
const db = mongoose.connection;

// error
db.on('error',console.error.bind(console,"Error connecting to db"));

// up and running then print the message
db.once('open',function(){
    console.log("Succesffuly connected to the Data Base");
});