import mongoose from 'mongoose';
// @ts-ignore
import dotenv from 'dotenv';

dotenv.config(); // Nạp các biến môi trường từ tệp .env

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error('MONGODB_URI is not defined in environment variables');
        process.exit(1); // Dừng ứng dụng nếu không có URI
    }

    try {
        await mongoose.connect(uri, {
            // @ts-ignore
            // Các tùy chọn đã bị ngừng hỗ trợ, bạn có thể loại bỏ
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB; // Xuất mặc định
