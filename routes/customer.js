const express = require("express");
const bodyParser = require("body-parser");
const customer=require("../model/customer");


const router=express()
router.use(express.json())
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post("/",async(req,res)=>{
    try {
        const {email}=req.body
        const user= await customer.findOne({email})
        if(user){
            res.send("email already exist")
        }else{
            const data=await customer.create(req.body)
            res.send({
                data
            })
        }
       
    } catch (error) {
        res.send({
            "status":"failed",
            message:error.message
        })
    }
        
})

module.exports = router;