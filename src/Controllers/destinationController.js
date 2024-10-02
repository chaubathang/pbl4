import Destination from '../models/Destination.js';

// Tạo điểm du lịch mới
export const createDestination = async (req, res) => {
    try {
        const destination = new Destination(req.body);
        await destination.save();
        res.status(201).json(destination);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Lấy danh sách điểm du lịch
export const getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
