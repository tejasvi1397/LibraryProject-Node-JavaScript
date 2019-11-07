const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LibrarySchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    image: {type: String},
    quantity: {type: Number},
    loan_period: {type: Number}
});


// Export the model
module.exports = mongoose.model('Library', LibrarySchema);