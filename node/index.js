const os=require("os")
const request=require("request")
const hello=require('./index_1.js')
console.log(hello())
// console.log(os.hostname())
// request({
//     url:"https://api.douban.com/v2/movie/top250",
//     json:true,
// },(err,res,body)=>{
//     console.log(JSON.stringify(body,null,2))
// })