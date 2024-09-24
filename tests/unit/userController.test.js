const request = require('supertest');
const app = require('../../src/server'); // Đường dẫn đến file app.js
const User = require('../../src/models/User');

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
