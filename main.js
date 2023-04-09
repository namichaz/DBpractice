const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',//localhost
    user:'tatsuya',
    password:'tatsuya',
    database:'testdb'
});

connection.connect();

connection.query('select * from test where number = 2;', function(error,results,fields){
    if(error) throw error;
    console.log(results[0]);
})

connection.end();