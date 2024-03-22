const http = require('http');

http.createServer(function(require, response){
	response.writeHead(200, {'Content-Type': 'test/plain'});
	response.end('Hello Node.js\n');
}).listen(1118, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1118/');