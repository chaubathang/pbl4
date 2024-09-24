const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Khóa chính
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', ReviewSchema);
