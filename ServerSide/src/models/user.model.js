var db = require("../models/dbConnection");

const createUser = async(email,hash) =>{
  let sql = `INSERT INTO register (email,password) VALUES ('${email}','${hash}')`;
  await db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("DATA", result);
  });
}

module.exports = {
  createUser,
};