var fs = require('fs');

console.log('准备写入数据。。。');

fs.writeFile('./input.txt', '我是通过fs.writeFile写入的文件的内容', function(err) {
	if (err) {
		return console.err(err);
	}
	console.log('文件写入成功！');
	console.log('-------------分割线----------');
	console.log('准备读取写入的数据。。。');

	fs.readFile('./input.txt', function(err, data) {
		if (err) {
			return console.err(err);
		}
		console.log('异步读取文件数据：' + data.toString());
	})
})