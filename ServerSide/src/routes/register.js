var express = require("express");
const bcrypt = require('bcrypt');
var router = express.Router();
var db = require("../models/dbConnection");
const {schema} = require("../auth/validation")

router
  .route('/')
  .get((req,res)=>{
    let sql = 'SELECT * FROM register';
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
      console.log(req.body)
      let email = req.body.email;
      let pass = req.body.password;
      let hash = await bcrypt.hash(pass,10);
      const data = await schema.validateAsync(req.body);
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

module.exports = router;