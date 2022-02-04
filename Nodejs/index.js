var mysql = require('mysql');
var express = require("express");
const cors = require('cors');
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors())

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

app.get('/twitterDB/:id',(req,res)=>{
  let sql = 'SELECT * FROM newsFeed WHERE id = ?';
  connection.query(sql,[req.params.id],(err, result)=>{
    if(err){
      console.log("Error",err)
    }
    console.log("DATA",result);
    res.send('<div><p>'+ result[0].Name+'</p></div>');
    // res.send(result);
  })
})
// app.get('/twitterDB/',(req,res)=>{
//   let sql = 'SELECT * FROM newsFeed';
//   connection.query(sql,(err, result)=>{
//     if(err){
//       console.log("Error",err)
//     }
//     console.log("DATA",result);
//     res.send('<div><p>'+ result[0].Name+'</p><p>'+result[0].Tweet+'</p><img src='+`${result[0].Image}`+'></div>')
//     // res.send(result);
//   })
// })
app.get('/twitterDB/',(req,res)=>{
  let sql = 'SELECT * FROM newsFeed';
  connection.query(sql,(err, result)=>{
    if(err){
      console.log("Error",err)
    }
    console.log("DATA",result);
    res.send(result);
  })
})