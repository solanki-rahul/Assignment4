const Cart = require('../models/cart');

exports.getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addCart = async (req, res) => {
    try {
        const cart = new Cart(req.body);
        await cart.save();
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findByIdAndUpdate(id, req.body, { new: true });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findByIdAndDelete(id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json({ message: 'Cart deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
