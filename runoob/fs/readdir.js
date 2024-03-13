// 读取文件目录

var fs = require('fs');

fs.readdir('./1', function(err, files) {
	if (err) {
		return console.error('err');
	}
	console.log(files)
	files.forEach(function(item) {
		console.log(item)
	})
})