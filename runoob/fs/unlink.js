// 删除文件

var fs = require('fs');

console.log('开始删除文件');

fs.unlink('./123.txt', function(err) {
	if (err) {
		return console.log(err);
	}

	console.log('文件删除成功！');
})