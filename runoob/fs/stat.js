var fs = require('fs');

console.log('准备打开文件。。。');

fs.stat('./input.txt', function(err, stats) {
	if (err) {
		return console.error(err);
	}

	console.log(stats);
	console.log('读取文件信息成功');

	console.log('是否为文件isFile?' + stats.isFile());
	console.log('是否为目录isDirectory?' + stats.isDirectory());
})