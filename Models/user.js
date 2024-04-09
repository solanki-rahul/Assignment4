const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    purchaseHistory: [String],
    shippingAddress: String
});

module.exports = mongoose.model('User', userSchema);
