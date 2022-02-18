var db = require("../models/dbConnection");

const createUser = (email, hash) => {
  return new Promise(async (resolve, reject) => {
    let sql = `INSERT INTO register (email,password) VALUES ('${email}','${hash}')`;
    await db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log('DAta in service',result);
        resolve(result);
      }
    });
  });
};

const loginUser = (email) => {
  return new Promise(async (resolve, reject) => {
    let sql = "SELECT * FROM register WHERE email = ?";
    await db.query(sql, [email], (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log(result);
        resolve(result);
      }
    });
  });
};

const getNewsFeed = () => {
  return new Promise(async (resolve, reject) => {
    let sql = "SELECT * FROM user";
    await db.query(sql,(err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  createUser,
  loginUser,
  getNewsFeed
};
