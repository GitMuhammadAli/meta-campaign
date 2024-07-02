const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    created_at: { type: Date },
    updated_at: { type: Date }
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
