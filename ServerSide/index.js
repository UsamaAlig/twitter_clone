var express = require("express");
var app = express();
var db = require("./dbConnection");
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors())

app.listen(3000, () => {
  console.log("Server running on port 3000");
 });

app.get('/newsfeed/:id',(req,res)=>{
  let sql = 'SELECT * FROM newsFeed WHERE id = ?';
  db.query(sql,[req.params.id],(err, result)=>{
    if(err){
      console.log("Error",err)
    }
    console.log("DATA",result);
    res.send('<div><p>'+ result[0].Name+'</p></div>');
    // res.send(result);
  })
})

app.get('/newsfeed/',(req,res)=>{
  console.log(req.query);
  let sql = 'SELECT * FROM user';
  db.query(sql,(err, result)=>{
    if(err){
      console.log("Error",err)
    }
    console.log("DATA",result);
    res.send(result);
  })
})