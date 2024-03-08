const express = require('express');
const app = express();
const fs = require('fs');

const id = 2;

app.get('/deleteUser', function(req, res) {
	fs.readFile(__dirname + '/users.json', 'utf8', function(err, data) {
		data = JSON.parse(data);
		delete data['user' + id];
		console.log(data);
		res.end(JSON.stringify(data));
	})
})

app.listen(1118, function(){
	console.log('启动')
})