var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'fintech'
});
 
connection.connect();
 
connection.query('SELECT * FROM fintech.user', function (error, results, fields) {
  if (error) throw error;
  console.log('우리 회원들은: ', results);
});
 
connection.end();