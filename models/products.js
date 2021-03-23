const mongoose = require('mongoose');
const { Schema } = mongoose;

const productsSchema = new Schema({
    productName: {
        type: String, 
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    manufacturedAt: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const Product = mongoose.model('Products', productsSchema);

module.exports = Product;
