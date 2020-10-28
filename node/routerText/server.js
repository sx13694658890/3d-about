const express=require("express")
const app=express()
const bodyparse=require("body-parser")


let foodRouter=require("./router/foodRouter")
let userRouter=require("./router/userRouter")
app.use("/user",userRouter)
app.use("/food",foodRouter)
app.listen(3000,()=>{
    console.log("server start")
})