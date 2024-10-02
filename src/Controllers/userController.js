import User from '../models/User.js';
//import nodemailer from 'nodemailer'; // Import nodemailer nếu  muốn gửi email
import bcrypt from 'bcrypt';
// Hàm xử lý tạo người dùng
export const createUser = (req, res) => {
    console.log('ba1');

    // Kiểm tra xem req.body có tồn tại và có các trường cần thiết không
    if (!req.body || !req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
        console.log('loi cmnr1');
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const { firstName, lastName, email, password } = req.body;
    const name = `${firstName} ${lastName}`;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    User.findOne({ email })
        .then(existingUser => {
            if (existingUser) {
                console.log('ba2');
                // Trả về phản hồi nếu email đã tồn tại
                return res.status(400).json({ message: 'Email already exists.' });
            }
  
            // Nếu email chưa tồn tại, tạo người dùng mới
            const user = new User({ name, email, password });
            return user.save();
        })
        .then(user => {
            // Kiểm tra nếu người dùng đã được tạo thành công
            if (user) {
                console.log('User registered successfully!');
                // Gửi phản hồi thành công về phía client
                return res.status(201).json({
                    message: 'User registered successfully!',
                });
            }
        })
        .catch(error => {
            console.log('ba3');
            // Chỉ xử lý lỗi và gửi phản hồi nếu có lỗi xảy ra
            if (!res.headersSent) {
                return res.status(500).json({ message: 'Server error: ' + error.message });
            }
        });
};


export const loginUser = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            

            // So sánh mật khẩu không mã hóa
            if (password !== user.password) { // So sánh trực tiếp
                return res.status(401).json({ message: 'pass?' });
            }

            const userInfo = {
                name: user.name,      // Họ tên
                email: user.email     // Email
            };
            console.log('eeeee:', userInfo.name); 
            // Gửi thông báo email (nếu cần)
            // sendEmailNotification(user.email); // Gọi hàm gửi email ở đây

            return res.status(200).json({
                message: 'Login successful',
                userInfo // Trả về thông tin người dùng
            });
        })
        .catch(error => {
            console.error('Error logging in:', error);
            return res.status(500).json({ message: 'Server error: ' + error.message });
        });
};






// Lấy thông tin người dùng
export const getUser = (req, res) => {
    const { id } = req.params; // Lấy ID từ tham số URL

    // Kiểm tra xem ID có tồn tại không
    if (!id) {
        console.log('ID is required');
        return res.status(400).json({ message: 'ID is required' });
    }

    // Tìm người dùng trong cơ sở dữ liệu
    User.findById(id)
        .then(user => {
            if (!user) {
                console.log('User not found');
                // Trả về phản hồi nếu không tìm thấy người dùng
                return res.status(404).json({ message: 'User not found' });
            }

            // Trả về chỉ họ tên và email của người dùng
            const userInfo = {
                name: user.name,      // Họ tên
                email: user.email     // Email
            };

            // Gửi thông báo email (nếu cần)
           // sendEmailNotification(user.email); // Gọi hàm gửi email ở đây

            return res.status(200).json({
                message: 'Login successful',
                userInfo // Trả về thông tin người dùng
            });
        })
        .catch(error => {
            console.log('Error fetching user:', error.message);
            // Xử lý lỗi và gửi phản hồi nếu có lỗi xảy ra
            if (!res.headersSent) {
                return res.status(500).json({ message: 'Server error: ' + error.message });
            }
        });
};
/*
// Hàm gửi email (ví dụ sử dụng Nodemailer)
const sendEmailNotification = (email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Sử dụng dịch vụ Gmail
        auth: {
            user: 'your-email@gmail.com', // Địa chỉ email của bạn
            pass: 'your-email-password', // Mật khẩu email
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com', // Địa chỉ email gửi
        to: email, // Địa chỉ email nhận
        subject: 'Login Successful',
        text: 'You have successfully logged in.',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error sending email:', error);
        }
        console.log('Email sent:', info.response);
    });
};
*/
