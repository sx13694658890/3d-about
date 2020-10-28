const url=require('url')
const query=require("querystring")
let urlString="https://47.95.207.1:3000/fcj/recpmmend/hot/hehe?us=123&ps=567#niao"


let string="name=wang&pass=123&sex=0"
const array=string.split("&")
let obj=query.parse(string,"&","=")

// 编码和解吗
query.escape
query.unescape
console.log(array)
const urlObj=url.parse(urlString)
// console.log(url.format(urlObj))