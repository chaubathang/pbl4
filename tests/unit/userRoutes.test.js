import request from 'supertest';
import app from '../../src/server.js'; // Đường dẫn đến file server.js

describe('User Routes', () => {
    test('POST /api/users', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({ username: 'testuser', email: 'test@example.com', password: '123456' });
        expect(response.statusCode).toBe(201);
    });
});
