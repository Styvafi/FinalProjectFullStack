// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const CreditSchema = new Schema({
name: String, Number,
number: {
    type: Number,
    required: true,
},
expiration: {
    type: String,
    required: true,

},
cvv: {
type: Number,
required: true,
min: 100,
max: 999,
}

});



module.exports = mongoose.model("Credit", CreditSchema);
