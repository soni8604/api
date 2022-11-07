const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port=8000;
const app=express();
const product=require("./routes/product")
const customer=require("./routes/customer")
const order=require("./routes/order")

mongoose.connect("mongodb://localhost:27017/api_web_tech_assignment",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("CONNECTED TO DATABASE");
})
app.use("/",product)
app.use("/customer",customer)
app.use("/order",order)

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
