var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('./file/input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk){
	console.log('正在读取：', chunk);
	data += chunk;
})

readerStream.on('end', function() {
	console.log('读取结束：', data);
})

readerStream.on('error', function(err) {
	console.log(err.stack);
})

console.log('程序执行完毕');