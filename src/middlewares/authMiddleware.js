import jwt from 'jsonwebtoken';

// Middleware kiểm tra token
exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Lấy token từ header và tách chuỗi
    if (!token) return res.status(403).send('A token is required for authentication');

    // Kiểm tra xem JWT_SECRET đã được định nghĩa chưa
    if (!process.env.JWT_SECRET) {
        return res.status(500).send('Server error: JWT_SECRET is not defined');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(401).send('Invalid Token');
        req.user = user; // Lưu thông tin người dùng vào đối tượng req
        next(); // Gọi next() để tiếp tục xử lý
    });
};
