const express = require('express');
const app = express();
const fs = require('fs');

const user = {
	"name": "mohit",
	"password": "password4",
	"profession": "teacher",
	"id": 4
}

app.get('/addUser', function (req, res) {
	fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
		data = JSON.parse(data);
		data['user4'] = user;
		console.log(data);
		res.end(JSON.stringify(data));
	})
})

app.listen(1118, function () {
	console.log('启动...')
})