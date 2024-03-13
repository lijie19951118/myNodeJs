var
	fs = require('fs'),
	url = require('url'),
	path = require('path'),
	http = require('http');

var root = path.resolve(process.argv[2] || '.');
console.log(root);

var server = http.createServer(function (request, response) {
	// 获取请求路径
	var pathname = url.parse(request.url).pathname;
	// 获取本地文件位置
	var filepath = path.join(root, pathname);

	// 获取文件状态
	fs.stat(filepath, function (err, stats) {
		if (err || !stats.isFile()) {
			console.log('404' + request.url);
			// 请求状态
			response.writeHead(404);
			// 页面展示
			response.end('404 Not Found');
			return;
		}
		console.log('200' + request.url);
		// 请求状态
		response.writeHead(200);
		// 返回数据
		fs.createReadStream(filepath).pipe(response);
	})
})

server.listen(1118);

console.log('启动...')