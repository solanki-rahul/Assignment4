const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const commentController = require('./controllers/commentController');
const cartController = require('./controllers/cartController');
const orderController = require('./controllers/orderController');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Product Endpoints
app.get('/products', productController.getAllProducts);
app.post('/products', productController.addProduct);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

// User Endpoints
app.get('/users', userController.getAllUsers);
app.post('/users', userController.addUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

// Comment Endpoints
app.get('/comments', commentController.getAllComments);
app.post('/comments', commentController.addComment);
app.put('/comments/:id', commentController.updateComment);
app.delete('/comments/:id', commentController.deleteComment);

// Cart Endpoints
app.get('/carts', cartController.getAllCarts);
app.post('/carts', cartController.addCart);
app.put('/carts/:id', cartController.updateCart);
app.delete('/carts/:id', cartController.deleteCart);

// Order Endpoints
app.get('/orders', orderController.getAllOrders);
app.post('/orders', orderController.addOrder);
app.put('/orders/:id', orderController.updateOrder);
app.delete('/orders/:id', orderController.deleteOrder);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
