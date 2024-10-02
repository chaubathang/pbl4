import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Khóa chính
    name: { type: String, required: true, unique: true },
    description: { type: String },
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Activity', ActivitySchema);
