var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'twitterDB'
});
 
connection.connect((err)=>{
  if(!err){
    console.log("Connction Done")
  }
  else{
    console.log("Connction Not Done")
  }
});
module.exports = connection;