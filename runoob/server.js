var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'test/plain'});

	response.end('Hello Wrorld\n');
}).listen(1118);

console.log('Srever running at http://127.0.0.1:1118/');