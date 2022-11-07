const express = require("express");
const bodyParser = require("body-parser");
const product=require("../model/product")


const router=express()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post("/product",async(req,res)=>{
    try {
        const data=await product.create(req.body)

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