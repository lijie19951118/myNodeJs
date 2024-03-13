var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: '3307',
	user: 'root',
	password: '123456',
	database: 'my_database'
});

connection.connect();

var addSql = 'INSERT INTO test(Id,name,url,alexa,country) VALUES(6,?,?,?,?)';
var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
//增
connection.query(addSql, addSqlParams, function(err, result) {
	if (err) {
		console.log('[INSERT ERROR] - ', err.message);
		return;
	}

	console.log('--------------------INSERT-----------------------');
	console.log('INSERT ID:', result);
	console.log('-----------------------------------/n\n\n');
})

connection.end();