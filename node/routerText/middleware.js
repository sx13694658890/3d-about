const express=require("express")
const app=express()
app.use("/",(req,res,next)=>{
    // 全局的中间件
    let {token}=req.query
    if(token){
        next()
    }else{
        res.send("缺少token")
    }
    console.log("中间件")
})
app.get("/add",(req,res)=>{
   
    res.send("ok")
})

app.listen(3000,()=>{
    console.log("server start")
})