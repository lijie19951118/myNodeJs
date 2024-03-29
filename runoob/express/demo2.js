var express = require('express');
var app = express();

// 主页输出你好
app.get('/', function(req, res) {
	console.log('主页get请求');
	res.send('你好 GET');
})

// post请求
app.post('/', function(req, res) {
	console.log('主页POST请求');
	res.send('你好 POST');
})

// /del_user 页面响应
app.get('/del_user', function(req, res) {
	console.log('/del_user 响应删除请求');
	res.send('删除页面');
})

// /list_user页面 GET 请求
app.get('/list_user', function(req, res) {
	console.log('/list_user GET 请求');
	res.send('用户列表页面');
})

// 对页面 abcd， abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
	console.log('/ab*cd GET 请求');
	res.send('正则匹配');
})


var server = app.listen(1118, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('应用实例，访问地址为 http://%s:%s', host, port);

})