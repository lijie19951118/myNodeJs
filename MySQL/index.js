const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	port: '3307',
	user: 'root',
	password: '123456'
});

connection.connect();

// 创建数据库
const addDatabaseSql = 'CREATE DATABASE IF NOT EXISTS mydb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;';
connection.query(addDatabaseSql, function (err, result) {
	if (err) throw err;
	console.log('数据库创建成功：mydb');
})

// 使用数据库
connection.query('use mydb');

// 创建表
const addTabSql = `CREATE TABLE IF NOT EXISTS myuser(
	name text,
	age int
)`;
connection.query(addTabSql, function (error, results, fields) {
	if (error) throw error;
	console.log('创建表完成:myuser');
	console.log(results);
})

connection.end();