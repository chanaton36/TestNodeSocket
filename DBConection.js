var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sys'
});

connection.connect();
 
connection.query('SELECT * FROM sys.sys_config', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0]);

  var object;
  for(object in rows){
    console.log('The solution is: ', rows[object]);
  }
});
 
connection.end();

