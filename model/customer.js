const mongoose = require("mongoose");
const Customer=new mongoose.Schema({
    customer_name:{type:String,required:true},
    email:{type:String ,required:true},
    Product_price:{type:Number,required:true},
    balance:{type:Number,required:true}
})
module.exports = mongoose.model("Customer", Customer);
