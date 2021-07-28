let express= require('express');
let app = express();

//跟路由
app.get('/',function (request,response) {
    // console.log(request.query);
    // console.log(request.get('Host'));
    // console.log(request.get('Referer'))
    response.send('404')

})
//跟路由
app.post('/',function (request,response) {
    // console.log(request.body);
    response.send('post认证成功')
})
//一级路由
app.get('/demo',(request,response)=>{
    response.send('我是demo路由返回的数据')
})
app.get('/demo/test',(request,response)=>{

    // response.download(__dirname+'./public/vue.png')
    // response.sendFile(__dirname+'/public/demo.zip');
    //     response.redirect('https://www.baidu.com');
    //     response.set('fuxu','1314')
    response.status(1314)
    response.send('我是demo/test路由返回的数据')
})
app.listen(3000,(err)=>{
      if (!err)console.log('登录成功');
      else console.log('登录失败');

})