const express=require("express")
const app=express()
const bodyparse=require("body-parser")
app.use(bodyparse.json()) // application/json
app.use(bodyparse.urlencoded({extended:false})) //application/x-www-form-urlencoded
app.get("/delete",(req,res)=>{
    res.send("删除成功")
})

app.get("/register",(req,res)=>{
    res.send("注册成功")
})

app.post("/user/reg",(req,res)=>{
    // 报文  消息体 请求体
    //express 不能直接解析消息体  需要用插件bodyparser
    console.log(req.body)
    let {user,pass}=req.body
    res.send({
        status:1,msg:"ok"
    })
    
})
app.get("/user/login",(req,res)=>{

    // req.query 来接受get数据
    let {user,pass}=req.query
    if(user==="wangyi"&&pass=="234"){
        res.send({err:0,msg:"ok",status:0})
    }else{
        res.send("输入有误")
    }
})

app.listen(3000,()=>{
  console.log("server start")
})
// ip port pathname post get data

