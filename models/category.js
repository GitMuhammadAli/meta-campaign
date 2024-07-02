const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    id: { type: Number, required: true, unique: true },
    parent_id: { type: Number },
    order: { type: Number, required: true, default: 1 },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    created_at: { type: Date },
    updated_at: { type: Date }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
