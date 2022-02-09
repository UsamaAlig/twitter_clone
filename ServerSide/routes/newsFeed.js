var express = require("express");
var router = express.Router();
var db = require("../dbConnection");


router.get('/',(req,res)=>{
  // console.log(req.query);
  let sql = 'SELECT * FROM user';
  db.query(sql,(err, result)=>{
    if(err){
      console.log("Error",err)
    }
    console.log("DATA",result);
    res.send(result);
  })

})

module.exports = router;