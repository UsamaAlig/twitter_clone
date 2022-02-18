const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router
    .route('/register')
    .post(userController.createUser);

router
    .route('/login')
    .post(userController.loginUser);

router
    .route('/newsfeed')
    .get(userController.getNewsFeed)

module.exports = router;
