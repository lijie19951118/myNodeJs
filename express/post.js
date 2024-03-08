var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/public', express.static('../public'));

app.get('/index.html', function (req, res) {
	res.sendFile(__dirname + '/index_post.html');
});

app.post('/process_post', urlencodedParser, function (req, res) {
	// 输出JSON格式
	const response = {
		'first_name': req.body.first_name,
		'last_name': req.body.last_name,
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

const server = app.listen(1118, function() {
	console.log('启动...')
})