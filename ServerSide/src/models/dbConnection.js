var mysql = require('mysql');
const config = require('../config/config')

var connection = mysql.createConnection(config.db);
 
connection.connect((err)=>{
  if(!err){
    console.log("Connction Done")
  }
  else{
    console.log("Connction Not Done")
  }
});
module.exports = connection;