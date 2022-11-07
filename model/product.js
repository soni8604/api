const mongoose = require("mongoose");
const Product = new mongoose.Schema({
  Product_type: { type: String,  required: true },
  Product_name: { type: String, required: true },
  Product_price: { type: Number, required: true },
  Available_quantity: { type: Number, required: true },
},{ timestamps: true });
module.exports = mongoose.model("Product", Product);