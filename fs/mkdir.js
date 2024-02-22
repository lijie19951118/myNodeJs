// 创建目录

var fs = require('fs');

console.log('开始创建目录。。。');

fs.mkdir('./11/22/33/44/', {recursive: true}, function(err) {
	if (err) {
		return console.log(err);
	}
	console.log('目录创建成功！');
})