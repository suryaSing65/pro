const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    Brand: String, 
    model: String,
    price: String,
});
module.exports = mongoose.model('products',ProductSchema);