var http = require('http');
var fs = require('fs');
var url = require('url');

// 创建服务器
http.createServer(function(request, response) {
	// 解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;

	// 打印请求的文件名
	console.log('请求路由是：' + pathname);

	// 从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1), function(err, data) {
		if (err) {
			console.error(err);
			// http状态码404
			response.writeHead(404, {'Content-Type': 'text/httl'});
		} else {
			// http状态码200
			response.writeHead(200, {'Content-Type': 'text/html'});

			// 详情文件内容
			response.write(data.toString());
		}
		// 发送详情数据
		response.end();
	})
}).listen(1118);

// 打印信息
console.log('服务器启动：http://127.0.0.1:1118/');