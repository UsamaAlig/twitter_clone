var express = require("express");
var app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const session = require('express-session');
var db = require("./dbConnection");
const newsFeedRoutes = require("./routes/newsFeed")
const {schema} = require("./auth/validation")

app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(bodyParser.json());
app.use(session({
  secret:'keyboard cat',
  resave:false,
  saveUninitialized:false

}))
app.use(cors({
  origin: 'http://127.0.0.1:5501',  
  methods: ["GET","POST"],
  // allowedHeaders:['sessionId', 'Content-Type'],
  // optionsSuccessStatus: 200
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

app.get('/sess',(req,res)=>{
  // req.session.isAuth = true;
  // console.log(req.session);
  // console.log(req.session.id);
  // res.send("Sessions")
  req.session.sess ? req.session.sess++ : req.session.sess=1;
  res.send(req.session.sess.toString());
})

app.post("/register", async(req,res)=>{
  try{
    let email = req.body.email;
    let pass = req.body.password;
    let hash = await bcrypt.hash(pass,10);
    let sql = `INSERT INTO register (email,password) VALUES ('${email}','${hash}')`;
    db.query(sql,(err,result)=>{
      if(err){
        console.log("Error",err)
      }
        console.log("DATA",result);
        res.send(req.body);
    })

  }catch(e){
    console.log('Error',e)

  }
})
app.post("/register/login", async(req,res)=>{
  try{
    let email = req.body.email;
    let pass = req.body.password;
    const data = await schema.validateAsync(req.body);
    console.log("Data",data);
    let sql = 'SELECT * FROM register WHERE email = ?'
    await db.query(sql,[email],async(err,result)=>{
      if(err) throw err;

      if(email===result[0].email){
        const validPass = await bcrypt.compare(pass,result[0].password);
        if(validPass){
              res.status(200).json("Valid Email and Pass");
              // res.redirect('http://127.0.0.1:5501/ClientSide/html/home.html');
              // res.send().status(200);
            }else{
              res.status(404).json("Wrong pass")
            }
      }else{
          res.json("User Not Found")
        }
    });
  }catch(e){
    console.log('Error',e);
    res.status(500).send("Something Broke")
  }
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

