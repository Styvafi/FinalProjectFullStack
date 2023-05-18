// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const ClothesSchema = new Schema({
    name: String,Number,
    size: {
        type: String,
        required: true,
        enum: ["XS","S","M","L"],
    },
    price: {
        type: Number
    
    },
    color: {
      type: String,
      enum: ["red", "green", "blue", "brown", "white", "black"],
    },
    category: {
        type: String,
        required: true,
        enum: ["shirt","pants","jacket","hoodie"],
    },
    image: {
        type: String,
    }
});



module.exports = mongoose.model("Clothes", ClothesSchema);
