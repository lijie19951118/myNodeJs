var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: '3307',
	user: 'root',
	password: '123456',
	database: 'my_database'
})

connection.connect();

// var sql = 'SELECT * FROM test';	// 所有
// var sql = 'SELECT name, url, id FROM test';	// 指定字段
// var sql = 'SELECT * FROM test WHERE id = 2';	// 条件查询
// var sql = 'SELECT * FROM test ORDER BY alexa'; // 升序
// var sql = 'SELECT * FROM test ORDER BY alexa DESC'; // 降序
// var sql = 'SELECT * FROM test LIMIT 4'; // 限制行数
// var sql = 'SELECT * FROM test WHERE name LIKE "%菜鸟%" AND id = 3'; //	名字包含菜鸟 AND id=3
// var sql = 'SELECT * FROM test WHERE name LIKE "%菜鸟%" OR time < "2024-03-12"'; //	名字包含菜鸟 OR 时间今天之前
// var sql = 'SELECT * FROM test WHERE time IN("2024-03-22 15:46:25", "2024-03-12")'; //	指定时间
var sql = 'SELECT * FROM test WHERE time BETWEEN "2024-03-12" AND "2024-03-22 15:46:25"'; //	指定时间之内

// 查询
connection.query(sql, function(err, result){
	if (err) {
		console.log('[SELECT ERROR] - ', err.message);
		return;
	}
	console.log('-------------------------------SELECT---------------------------');
	console.log(result);
	console.log('-----------------------------------------------\n\n');
})

connection.end();

// connection.query('SELECT 1 + 1 AS solution', function(error, results, fields){
// 	if(error) throw error;
// 	console.log('The solution is: ', results[0].solution);
// })