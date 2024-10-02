import mongoose from 'mongoose';

const PromotionSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Khóa chính
    title: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Promotion', PromotionSchema);
