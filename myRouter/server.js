var http = require('http');
var url = require('url');

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("当前请求的pathname是：" + pathname);

		route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(1118);
	console.log("请求开始！")
}

exports.start = start;