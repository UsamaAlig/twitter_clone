const userService = require("../services/user.service");

const loginUser = (req, res, next) => {
  console.log("createUser from userController");
  res.send("createUser from userController");
};

const createUser = async (req, res, next) => {
  await userService
    .createUser(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

const getUsers = (req, res, next) => {
  console.log("getUsers from userController");
  res.send("getUsers controller");
};

const getUser = (req, res, next) => {
  console.log("Get user from userController");
  res.send("Get user controller");
};

const getNewsFeed = (req, res, next) => {
  console.log("updateUser from userController");
  res.send("updateuser from usercontroller");
};

module.exports = {
  getUsers,
  loginUser,
  createUser,
  getUser,
  getNewsFeed,
};
