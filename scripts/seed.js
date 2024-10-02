import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../src/models/User'; 
import Destination from '../src/models/Destination';

// Gọi dotenv.config() để load biến môi trường
dotenv.config();

const seedDatabase = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error('MONGODB_URI is not defined in environment variables');
        process.exit(1);
    }

    try {
        await mongoose.connect(uri, {
            // @ts-ignore
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

        await user.save();

        console.log('Database seeded!');
    } catch (err) {
        console.error('Error seeding database:', err.message);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();
