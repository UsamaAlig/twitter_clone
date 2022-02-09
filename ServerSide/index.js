var express = require("express");
var app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
var db = require("./dbConnection");
const newsFeedRoutes = require("./routes/newsFeed")

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://127.0.0.1:5501',  
  methods: ["GET","POST"]
}))
app.use("/newsfeed",newsFeedRoutes);

app.get('/register',(req,res)=>{
  let sql = 'SELECT * FROM register';
  db.query(sql,(err, result)=>{
    if(err){
      console.log("Error",err)
    }
    console.log("DATA",result);
    res.send(result);
  })
})

app.post("/register",(req,res)=>{
  let data = req.body;
  console.log(req.body);
  let sql = 'INSERT INTO register SET ?';
  db.query(sql,data,(err,result)=>{
    if(err){
      console.log("Error",err)
    }
      console.log("DATA",result);
      res.send(result);
  })
  // res.send(data)
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
 });

// app.get('/newsfeed/:id',(req,res)=>{
//   let sql = 'SELECT * FROM newsFeed WHERE id = ?';
//   db.query(sql,[req.params.id],(err, result)=>{
//     if(err){
//       console.log("Error",err)
//     }
//     console.log("DATA",result);
//     res.send('<div><p>'+ result[0].Name+'</p></div>');
//     // res.send(result);
//   })
// })

