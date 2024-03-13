var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: '3307',
	user: 'root',
	password: '123456',
	database: 'my_database'
});

connection.connect();

var delSql = 'DELETE FROM test where id = 0';
//删除
connection.query(delSql, function(err, result) {
	if (err) {
		console.log('[DELETE ERROR] - ', err.message);
		return;
	}

	console.log('---------------------------DELETE-----------------------');
	console.log('DELETE affectedRows', result.affectedRows);
	console.log('--------------------------------\n\n');
})

connection.end();