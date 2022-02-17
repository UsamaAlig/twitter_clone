var express = require("express");
const bcrypt = require('bcrypt');
var router = express.Router();
var db = require("../models/dbConnection");
const {schema} = require("../auth/validation")

router
  .route('/')
  .get((req,res)=>{
    let sql = 'SELECT email FROM register';
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
      console.log(email);
      let pass = req.body.password;
      let hash = await bcrypt.hash(pass,10);
      await schema.validateAsync(req.body);
      let sql1 = 'SELECT * FROM register where email = ?';
      await db.query(sql1,[email],async(err,result)=>{
        if(err){
          throw err;
        }
        // if(email===result[0].email){
        //     console.log("Email Already Exist");
        //     res.status(404);
        // }
        else{
          let sql = `INSERT INTO register (email,password) VALUES ('${email}','${hash}')`;
          await db.query(sql,(err,result)=>{
          if(err){
            console.log("Error",err)
          }
            console.log("DATA",result);
            res.send(req.body);
          })
        }
      })
      
  
    }catch(e){
      console.log('Error',e)
  
    }
  })

module.exports = router;