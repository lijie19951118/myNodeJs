const express = require('express');
const app = express();
const fs = require('fs');

const bodyParser = require('body-parser');
const multer = require('multer');

app.use('/public', express.static('../public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('image'));

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + '/index_upload.html');
})

app.post('/file_upload', function(req, res) {
	console.log(req.files[0]);

	var des_file = __dirname + req.files[0].originalname;

	fs.readFile(req.files[0].path, function(err, data) {
		fs.writeFile(des_file, data, function(err) {
			if (err) {
				console.log(err)
			} else {
				const response = {
					message: '文件上传成功',
					filename: req.files[0].originalname
				}
				console.log(response);
				res.end(JSON.stringify(response))
			}
		})
	})
})

app.listen(1118)