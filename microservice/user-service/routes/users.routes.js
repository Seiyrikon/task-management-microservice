// routes/sample.routes.js
const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.get('/users', userController.getAllUsers);

router.post('/insert-user', userController.insertUser);

module.exports = router;
