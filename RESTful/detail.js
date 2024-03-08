const express = require('express');
const app = express();
const fs = require('fs');

app.get('/:id', function (req, res) {
	fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
		data = JSON.parse(data);
		const user = data['user' + req.params.id];
		console.log(user);
		res.end(JSON.stringify(user));
	})
})

app.listen(1118,function(){
	console.log('启动')
})