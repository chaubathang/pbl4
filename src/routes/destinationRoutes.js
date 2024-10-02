import express from 'express';
import { createDestination, getDestinations } from '../controllers/destinationController.js'; // Đường dẫn đến file destinationController.js

const router = express.Router();

// Định nghĩa các route cho điểm du lịch
router.post('/', createDestination);
router.get('/', getDestinations);

export default router;
