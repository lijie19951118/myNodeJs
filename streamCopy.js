var fs = require('fs');

var readerStream = fs.createReadStream('./file/input.txt');

var writeStream = fs.createWriteStream('./file/copy.txt');

readerStream.pipe(writeStream);

console.log('执行完毕');