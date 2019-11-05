const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const library = require('./routes/library.route'); 

// serve files in static' folder at root URL '/'
// app.use('/library', express.static('static'));
app.use('/', express.static('static'));

// Set up mongoose connection
const mongoose = require('mongoose');
let MongoAtlasURL = 'mongodb+srv://LibraryAdmin:admin1867@ece9065-lab3-tejasvi-kctlu.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || MongoAtlasURL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/library', library);
// app.use('/', library);

let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});