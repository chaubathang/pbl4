// scripts/create.js
import mongoose from 'mongoose';
import User from '../src/models/User.js'; // Đảm bảo đường dẫn đúng
import dotenv from 'dotenv';

dotenv.config(); // Tải biến môi trường từ .env

const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
    throw new Error("MONGODB_URI is not defined in .env file");
}

const createUserCollection = async () => {
    try {
        // @ts-ignore
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        // Tạo một tài liệu rỗng để khởi tạo collection (nếu cần)
        await User.create({ username: "", email: "", password: "" });
        console.log('User collection created successfully!');
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
};

createUserCollection();
