const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// Định nghĩa các route cho điểm du lịch
router.post('/', destinationController.createDestination);
router.get('/', destinationController.getDestinations);

module.exports = router;
