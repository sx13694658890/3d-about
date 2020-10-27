const cheerio=require('cheerio')

let $=cheerio.load('<div><p>你好</p><img src="http://www.baidu.com"><img src="http://www.baidu1111.com"></div>')
console.log($('img').attr('src'))
$('img').each((index,el)=>{
    console.log($(el).attr('src'))
})