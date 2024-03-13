var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	port: '3307',
	password: '123456',
	database: 'my_database'
})

connection.connect();

var modSql = 'UPDATE test SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站111111111111', 'http://m.runoob.com2222222222222', 6];
//改
connection.query(modSql, modSqlParams, function(err, result) {
	if (err) {
		console.log('[UPSATE ERROR] - ',err.message);
		return;
	}
	console.log('-----------------------------UPDATE---------------------------');
	console.log('UPDATE affectedRows', result.affectedRows);
	console.log('----------------------------------------------/n\n\n');
})

connection.end();