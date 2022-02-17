var express = require("express");
var app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../.env') });
let port = process.env.PORT;
let host = process.env.HOST;
const userRoute = require('./routes/user.route');
const newsFeedRoutes = require("./routes/newsFeed");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");

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
app.use("/login",loginRoutes);
app.use("/user", userRoute);



app.get('/sess',(req,res)=>{
  req.session.sess ? req.session.sess++ : req.session.sess=1;
  res.send(req.session.sess.toString()); 
})
 
app.listen(port,host, () => console.log(`Listening on port ${host}:${port},`));
