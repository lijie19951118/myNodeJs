var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	// 解析url

	var params = url.parse(req.url, true).query;

	console.log(params)

	res.end();

}).listen(1118);