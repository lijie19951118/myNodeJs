const fs = require('fs');

fs.readFile('1.jpeg', function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
		console.log(data.length + 'bytes');

		// Buffer -> String
		const text = data.toString('utf-8');
		console.log(text)

		// String -> Buffer
		const buf = Buffer.from(text, 'utf-8');
		console.log(buf)
	}
})