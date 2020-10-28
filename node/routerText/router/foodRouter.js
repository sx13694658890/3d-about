const express=require('express')
const router=express.Router()

router.get("/add",()=>{
    res.send("food add")
})
router.get("del",(req,res)=>{
    console.log("del add")
})

module.exports=router