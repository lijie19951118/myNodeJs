const fs = require('fs');

const data = '1111111111111111111111111111';

fs.writeFile('1.txt', data, function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('ok')
})