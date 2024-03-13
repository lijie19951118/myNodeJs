const fs = require('fs');

// 渎
const stream = fs.createReadStream('read.txt', 'utf-8');
stream.on('data', function (chunk) {
	console.log('DATA:------------------------------');
	console.log(chunk.length);
})
stream.on('end', function () {
	console.log('END');
})
stream.on('error', function (err) {
	console.log('ERROR:' + err);
})

// 写
// const ws1 = fs.createWriteStream('write1.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END');
// ws1.end();

// const ws2 = fs.createWriteStream('write2.txt');
// ws2.write(Buffer.from('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(Buffer.from('END', 'utf-8'));
// ws2.end();

// 复制
// const rs = fs.createReadStream('read.txt');
// const ws = fs.createWriteStream('copy.txt');
// rs.pipe(ws, {end: true});

