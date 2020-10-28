const express=require("express")
const app=express()
 //static  静态资源目录 等同于
app.get("/test1",
(req,res,next)=>{
    // 局部的中间件
},
(req,res)=>{
    res.send("ok")
})

app.listen(3000,()=>{
    console.log("server start")
})