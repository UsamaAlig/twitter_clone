const userService = require("../services/user.service");

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

const loginUser = async(req, res, next) => {
  await userService
    .loginUser(req.body)
    .then((data) => {
      console.log('Controller',data)
      res.sendStatus(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

const getNewsFeed = async(req, res, next) => {
  await userService
    .getNewsFeed()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

module.exports = {
  loginUser,
  createUser,
  getNewsFeed,
};
