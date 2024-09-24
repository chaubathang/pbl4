const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Khóa chính
    name: { type: String, required: true },
    experience: { type: String },
    languages: [{ type: String }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Guide', GuideSchema);
