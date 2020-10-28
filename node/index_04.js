const fs=require("fs")
// fs.readdir("./node01",(err,res)=>{
//     for(let index=0;index<res.length;index++){
         
//     }
// })

fs.stat("./node01",(err,stats)=>{
    if(stats.isDirectory()){
        console.log('文件dsafdsj')
    }else{
        console.log("文件")
    }
    
})