const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// Định nghĩa các route cho người dùng
router.post('/', userController.createUser);
router.get('/:id', userController.getUser);

module.exports = router;
