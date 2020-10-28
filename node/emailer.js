const nodemailer=require('nodemailer')   
    // 创建发送对象
    let transporter=nodemailer.createTransport({
         host:"smtp.163.com",
         port:465,
         secure:true,
         auth:{
             user:"sxl13694658890@163.com",   
             pass:"DTTAIPHNASFJFVZN" 
         }
    })

   transporter.sendMail({
         from:'sxl',
         to:"1632241215@qq.com",
         subject:"技术支持",
         text:"您的验证码是:999999,五分钟内有效",
    },(err,data)=>{
        console.log(err)
        console.log(data)
    })
   
