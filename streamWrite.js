// 写入流
var fs = require('fs');
var data = 'dsfsadfasfasdfsadfsadf发射点发射点发射点发射点发射点发生2\n33333333333333333333';

var writeStream = fs.createWriteStream('./file/output.txt');

writeStream.write(data, 'UTF8');

writeStream.end();

// 监听事件
writeStream.on('finish', function() {
	console.log('写入完成');
})

writeStream.on('error', function(err){
	console.log(err.stack);
})

console.log('程序执行完毕');