"use strict";
const http = require('http');

http.createServer((require, response) => {
	let status = 200;
	response.writeHead(status, {'Content-Type': 'test/plain'});
	response.end('Hello Node.js\n');
}).listen(1118, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1118/');