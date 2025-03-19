const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

// Route to register a new user
router.post('/', usersController.registerUser);

module.exports = router;
