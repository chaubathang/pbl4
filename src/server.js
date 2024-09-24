const express = require('express');
const path = require('path'); 
const connectDB = require('../database/db');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Định nghĩa route cho trang chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const getLocalIP = () => {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
        if (interfaces.hasOwnProperty(interfaceName)) {
            const ifaceArray = interfaces[interfaceName]; // Lấy mảng các interface

            // Kiểm tra xem ifaceArray có tồn tại
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

module.exports = app;
