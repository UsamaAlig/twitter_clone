var mysql      = require('mysql');
var express = require("express");
var app = express();

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

app.listen(3000, () => {
  console.log("Server running on port 3000");
 });

app.get('/twitterDB',(req,res)=>{
  let sql = 'SELECT * FROM signup';
  connection.query(sql,(err,rows, result)=>{
    if(err){
      console.log("Error",err)
    }
    console.log("DATA",rows);
    res.send(rows);
  })
})