const express = require("express");
const bodyParser = require("body-parser");
const product=require("../model/product")
const customer=require("../model/customer")
const order=require("../model/order")


const router=express()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post("/",async(req,res)=>{
    try {
        const custId=req.body.customer_id;
        const itemId=req.body.inventory_id;
        console.log(itemId);
        const cutomer=await customer.findOne({custId})
        const productid=await product.findOne({itemId})
        console.log(cutomer,productid);

        const data=await order.create(req.body)
        console.log(req.body)
    res.send({
        data
    })
    } catch (error) {
        res.send({
            "status":"failed",
            message:error.message
        })
    }
        
})

module.exports = router;