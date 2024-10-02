import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Khóa chính
    name: { type: String, required: true }, // Thay đổi từ username thành name và bỏ unique
    email: { type: String, required: true, unique: true }, // Giữ unique cho email
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserSchema);
