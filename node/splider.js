const http=require('https')
const fs=require("fs")
const cheerio=require('cheerio')
let url="https://www.bilibili.com/?rt=V%2FymTlOu4ow%2Fy4xxNWPUZ7fjDxJtOzHnGc86fJaylbc%3D"
let json="http://node.js.org/dist/index.json"
http.get(url,(res)=>{

    const {statusCode}=res // 状态码
    const contentType=res.headers["content-type"]

    // let err=null
    // if(statusCode!==200){
    //     err=new Error("请求错误")
    // }else if(!/^text\/html/.test(contentType)){
    //     // 格式错误
    // }

    // if(err){
    //     res.resume()
    //     return false
    // }
    // console.log(res)
    let rawData=''
    res.on("data",(chunk)=>{
       console.log("数据传输")
       rawData+=chunk.toString('utf8')
    //    console.log(chunk.toString('utf8'))
    })
    res.on("end",()=>{
        console.log("数据传输完毕")
        var $=cheerio.load(rawData)
        $('img').each((index,el)=>{
            console.log($(el).attr('src').replace(/^\//,"http:/"))
        })
        fs.writeFileSync("./bili.html",rawData)
           
    }).on("err",(err)=>{
        console.log("请求错误")
    })
})