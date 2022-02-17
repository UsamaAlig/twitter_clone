// JavaScript source code
const bcrypt = require("bcrypt");
const { schema } = require("../auth/validation");
const userModel = require("../models/user.model")

const createUser = async (userBody) => {
  let email = userBody.email;
  let pass = userBody.password;
  let hash = await bcrypt.hash(pass, 10);
  await schema.validateAsync(userBody);
  userModel.createUser(email,hash).then((data)=>{
    return data;
  })
  
};

module.exports = {
  createUser,
};
