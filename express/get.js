var express = require('express');
var app = express();

app.use('/public', express.static('../public'));

app.get('/index.html', function (req, res) {
	res.sendFile(__dirname + '/' + 'index.html');
})

app.get('/process_get', function (request, response) {
	// 输出 json 格式
	const res = {
		"first_name": request.query.first_name,
		"last_name": request.query.last_name
	}
	console.log(res);
	response.end(JSON.stringify(res))
})

const server = app.listen(1118, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('http://%s:%s', host, port)
})