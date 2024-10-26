const mongoose = require('mongoose');

// Modèle pour une commande
const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    part: { type: mongoose.Schema.Types.ObjectId, ref: 'AutoPart', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
