var express = require('express');
var app = express();

app.use('/public', express.static('../public'));

// app.get('/', function (req, res) {
// 	res.send('你好');
// })

console.log(__dirname,9999)

var server = app.listen(1118, function () {
	
	// var host = server.address().address;
	// var port = server.address().port;

	console.log('启动 http://127.0.0.1:1118');
})