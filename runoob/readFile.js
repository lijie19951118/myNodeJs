var fs = require('fs');

// var data = fs.readFileSync('input.txt');

fs.readFile('./file/input.txt', function(err, data) {
	if (err) {
		console.log(err.stack);
		return
	};
	console.log(data.toString());
})

// console.log(data.toString());

console.log('程序执行结束！');