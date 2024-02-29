
//require the library
const mongoose=require('mongoose');

//connect to database
mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');

//acquire the connection(to check if it is succesful)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,"error connecting to db"));

//up and running then print the message
db.once('open',function(){
    console.log("Connected to the db successfully");
})
