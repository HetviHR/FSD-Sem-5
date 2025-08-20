const mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    pname : String,
    pdetails : String,
    pprice : Number
})

var ProductModel = mongoose.model('Products',ProductSchema)

module.exports = ProductModel
