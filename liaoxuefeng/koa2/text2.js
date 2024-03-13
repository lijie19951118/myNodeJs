const Koa = require('koa');

const router = require('koa-router')();

const app = new Koa();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// 打印请求数据
app.use(async (ctx, next) => {
	console.log(`${ctx.request.method} ${ctx.request.url} ...`);
	await next();
})

// get请求
router.get('/hello/:name', async (ctx, next) => {
	var name = ctx.params.name;
	ctx.response.body = `<h1>Hello ${name}!</h1>`;
});

// post请求
router.post('/signin', async (ctx, next) => {
	const name = ctx.request.body.name || '';
	const password = ctx.request.body.password || '';
	console.log(`Signin with name:${name}, password:${password}`);
	if (name === 'koa' && password === '123456') {
		ctx.response.body = `<h1>Welcome, ${name}</h1>`;
	} else {
		ctx.response.body = `<h1>Login failed!</h1>
		<p>
			<a href='/'>Try again</a>
		</p>`
	}
})

// 首页
router.get('/', async (ctx, next) => {
	ctx.response.body = `<h1>Index</h1>
	<form action="/signin" method="post">
			<p>Name: <input name="name"></p>
			<p>Password: <input name="password" type="password"></p>
			<p><input type="submit" value="Submit"></p>
	</form>`;
});

// 添加路由中间件
app.use(router.routes());

app.listen(1118);
console.log('启动')