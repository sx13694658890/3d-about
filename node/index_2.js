const fs=require("fs")
const path=require('path')
// try{

//     let dirs=fs.readdirSync("./node223")
// }
// catch(err){
//    console.log(err)
// }
// console.log("22222")

// let dirs=fs.readdirSync("./")
// console.log(dirs)
// console.log(fs.readFile(path.join(__dirname,text.txt)))node

// fs.readdir('../node2',(err,res)=>{
//     if(err){
//        console.log("读取失败")
//     }else{
//         console.log(res)
//     }
// })
// curd create  update  read del

// fs.mkdir("./test",(err)=>{
//     console.log(err,data)
// })
// fs.rename("./test","./test01",(err,res)=>{
//     console.log(err)
//     console.log(res)
// })

// 只能删除空文件夹
fs.rmdir("./test01",(err,res)=>{
    console.log(err)
    console.log(res)
})