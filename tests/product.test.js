const request = require('supertest');
const app = require('../index'); // Adjust if necessary

describe('Product Service', () => {
    it('should return a list of products', async () => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([
            { id: 1, name: 'Laptop' },
            { id: 2, name: 'Smartphone' }
        ]);
    });

    it('should return a product by id', async () => {
        const res = await request(app).get('/products/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ id: 1, name: 'Laptop' });
    });

    it('should return 404 for a non-existent product', async () => {
        const res = await request(app).get('/products/999'); // Adjust as necessary
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual({ message: 'Product not found' });
    });
});
