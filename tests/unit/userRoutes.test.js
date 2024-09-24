const request = require('supertest');
const app = require('../../src/server'); // Đường dẫn đến file app.js

describe('User Routes', () => {
    test('POST /api/users', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({ username: 'testuser', email: 'test@example.com', password: '123456' });
        expect(response.statusCode).toBe(201);
    });
});
