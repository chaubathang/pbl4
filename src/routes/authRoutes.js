import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt'; // Thư viện băm mật khẩu

const router = express.Router();

// Đăng ký người dùng
// @ts-ignore
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Kiểm tra xem người dùng đã tồn tại chưa
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Băm mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo tài khoản mới
        const newUser = new User({ firstName, lastName, email, password: hashedPassword });
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
