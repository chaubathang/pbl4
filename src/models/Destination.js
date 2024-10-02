import mongoose from 'mongoose';

const DestinationSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Khóa chính
    name: { type: String, required: true, unique: true },
    description: { type: String },
    location: { type: String },
    images: [{ type: String }],
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Destination', DestinationSchema);
