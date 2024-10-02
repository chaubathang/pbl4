import request from 'supertest';
import app from '../../src/server.js'; // Đường dẫn đến file server.js
import User from '../../src/models/User.js';

describe('User Controller', () => {
    afterEach(async () => {
        await User.deleteMany({});
    });

    test('Create user', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({ username: 'testuser', email: 'test@example.com', password: '123456' });
        expect(response.statusCode).toBe(201);
        expect(response.body.username).toBe('testuser');
    });
});
