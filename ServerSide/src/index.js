var express = require("express");
var app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const session = require('express-session');
const newsFeedRoutes = require("./routes/newsFeed");
const registerRoutes = require("./routes/register");

app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(bodyParser.json());
app.use(session({
  secret:'keyboard cat',
  resave:false,
  saveUninitialized:false,
  cookie: { secure: false , maxAge:60000}
}))
app.use(cors({
  origin: 'http://127.0.0.1:5501',  
  methods: ["GET","POST"],
}))
app.use("/newsfeed",newsFeedRoutes);
app.use("/register",registerRoutes);
app.use("/login",registerRoutes);


app.get('/sess',(req,res)=>{
  req.session.sess ? req.session.sess++ : req.session.sess=1;
  res.send(req.session.sess.toString()); 
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

