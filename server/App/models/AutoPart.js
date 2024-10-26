const mongoose = require('mongoose');

// Modèle pour une pièce auto
const AutoPartSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    brand: { type: String, required: true },
    carModel: { type: String, required: true },
    price: { type: Number, required: true },
    condition: { type: String, enum: ['new', 'used'], required: true },
    images: { type: [String] }
});

module.exports = mongoose.model('AutoPart', AutoPartSchema);
