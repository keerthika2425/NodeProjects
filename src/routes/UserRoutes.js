const express = require('express');
const { addUser, checkUser } = require('../controllers/UserController');

const router = express.Router();

// Route to add a user
router.post('/add-user', addUser);

// Route to check if a user exists
router.post('/check-user', checkUser);

module.exports = router;
