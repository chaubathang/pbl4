import express from 'express';
import { createUser, getUser, loginUser } from '../Controllers/userController.js'; 

const router = express.Router(); // Tạo một router mới


// Định nghĩa các route cho người dùng
router.post('/login', loginUser);
router.post('/register', createUser); // Route để đăng ký người dùng
router.get('/:id', getUser); // Route để lấy thông tin người dùng


export default router; // Xuất router
