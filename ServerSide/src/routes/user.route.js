const express = require('express');
const router = express.Router();

//const userValidation = require('../../validations/user.validation');
const userController = require('../controllers/user.controller');

router
    .route('/register')
    .get(userController.getUsers)
    .post(userController.createUser);

router
    .route('/login')
    .get(userController.getUser)
    .post(userController.loginUser);

router
    .route('/newsfeed')
    .get(userController.getNewsFeed)

module.exports = router;
