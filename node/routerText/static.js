const express=require("express")
const app=express()
const path=require("path")
console.log(path.join(__dirname,"./assets"))
console.log(path.resolve(__dirname,))
// console.log(path.join(__diename,))
// app.use(exprss.static(path.resolve(__dirname,)))
app.use(express.static(path.join(__dirname,"./assets")))
app.use("/public",express.static(path.join(__dirname,"./assets")))
app.listen(3000,()=>{
    console.log("server start")
})