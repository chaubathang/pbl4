const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../src/models/User'); 
const Destination = require('../src/models/Destination');

const seedDatabase = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error('MONGODB_URI is not defined in environment variables');
        process.exit(1);
    }

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await User.deleteMany({});
        await Destination.deleteMany({});

        const user = new User({
            username: 'admin',
            email: 'admin@example.com',
            password: 'admin123',
        });

        const destination = new Destination({
            name: 'Bà Nà Hills',
            description: 'Núi Bà Nà nằm ở Đà Nẵng',
            location: 'Đà Nẵng, Việt Nam',
        });

        await user.save();
        await destination.save();

        console.log('Database seeded!');
    } catch (err) {
        console.error('Error seeding database:', err.message);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();