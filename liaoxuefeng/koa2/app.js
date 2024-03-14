
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');	// post请求获取body中间件
// 导入controller middleware:
const controller = require('./controller');

const app = new Koa();

// post请求获取body中间件
app.use(bodyParser());	
// 使用middleware:
app.use(controller());

app.listen(1118);
console.log('启动...')