var express = require("express");
const bcrypt = require('bcrypt');
var router = express.Router();
var db = require("../models/dbConnection");
const {schema} = require("../auth/validation")


router
  .route('/')
  .get((req,res)=>{
    let sql = 'SELECT * FROM user';
    db.query(sql,(err, result)=>{
      if(err){
        console.log("Error",err)
      }
      console.log("DATA",result); 
      res.send(result);
    })
  })
  .post(async(req,res)=>{
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

module.exports = router;