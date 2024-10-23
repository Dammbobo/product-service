// Existing code
const express = require('express');
const app = express();

const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Smartphone' }
];

app.get('/products', (req, res) => res.json(products));

// Route to fetch product by ID
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        return res.json(product);
    }
    return res.status(404).json({ message: 'Product not found' });
});

module.exports = app; // Ensure you export the app
