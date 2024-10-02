import express from 'express';
import path from 'path'; 
import { fileURLToPath } from 'url';
import connectDB from '../database/db.js'; // Kết nối đến MongoDB
import os from 'os';
import admin from 'firebase-admin'; // Import Firebase Admin SDK

// Import các route
import userRoutes from './routes/userRoutes.js'; 
import destinationRoutes from './routes/destinationRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối đến MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Khởi tạo Firebase Admin
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "mongodb://localhost:27017/danangtourismapp" 
});

// Định nghĩa route cho trang chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});



// Sử dụng các route
app.use('/api/users', userRoutes); // Kết nối route người dùng
app.use('/api/destinations', destinationRoutes); // Kết nối route điểm du lịch

// Hàm để lấy địa chỉ IP cục bộ
const getLocalIP = () => {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
        if (interfaces.hasOwnProperty(interfaceName)) {
            const ifaceArray = interfaces[interfaceName]; // Lấy mảng các interface
            if (Array.isArray(ifaceArray)) {
                for (const iface of ifaceArray) {
                    if (iface.family === 'IPv4' && !iface.internal) {
                        return iface.address; // Trả về địa chỉ IP
                    }
                }
            }
        }
    }
    return '127.0.0.1'; 
};

// Bắt đầu server và in ra địa chỉ URL
const server = app.listen(PORT, () => {
    const localIP = getLocalIP();
    console.log(`Server running on port ${PORT}`);
    console.log(`Access it at: http://${localIP}:${PORT}`); // In ra địa chỉ IP
});

export default app; // Xuất app cho các tệp khác
