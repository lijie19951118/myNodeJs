// 解压
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('./file/input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('./file/inputGz.txt'));

console.log('解压完成');