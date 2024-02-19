// 压缩
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('./file/input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('./file/input.txt.gz'));

console.log('文件压缩完成');