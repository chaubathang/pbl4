import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Khóa chính
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    activityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' },
    bookingDate: { type: Date, default: Date.now },
    numberOfPeople: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Booking', BookingSchema);
