var http = require('http');
var querystring = require('querystring');

var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function(req, res) {

	var body = '';

	req.on('data', function(chunk) {
		console.log('获取数据中。。', chunk);
		body += chunk;
	})

	req.on('end', function() {
		console.log('结束=', body);
		body = querystring.parse(body);
		console.log('转义=', body);
		// 设置响应头信息
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
		if (body.name && body.url) {
			res.write('网络名称：' + body.url);
			res.write('<br>');
			res.write('网站url：' + body.url);
		} else {
			res.write(postHTML);
		}
		res.end();
	})
}).listen(1118)