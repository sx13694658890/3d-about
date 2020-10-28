 const fs=require("fs")


//  readFile  
//  unlink   
 
//  fs.writeFile
//  fs.appendFile

 // 创建文件
//  fs.writeFile('name.html','<p>今天天机还不错</p>',(err)=>{
//      console.log(err)
//  })
//  fs.appendFile('name.html',"<h4>你好我们女神</h4>",(err)=>{
//      console.log(err)
//  })

//  console.log(fs.readFileSync("name.html","utf8"))

fs.unlink("name.html",(err)=>{
    console.log(err)
})
