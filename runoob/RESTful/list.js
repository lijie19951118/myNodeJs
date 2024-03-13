const express = require('express');
const app = express();
const fs = require('fs');

app.get('/listUsers', function (req, res) {
	fs.readFile(__dirname + '/' + 'users.json', 'utf8', function (err, data) {
		console.log(data);
		res.end(data);
	})
})

app.listen(1118, function () {
	console.log('启动...')
})