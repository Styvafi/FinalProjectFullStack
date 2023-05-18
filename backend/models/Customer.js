const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name: String, Number, Boolean,
    areaCode: {
        type: Number,
    },
    priorCustomer: {
        type: Boolean,
    },
    email: {
        type: String,
    }
})

module.exports = mongoose.model("Customer", CustomerSchema);
