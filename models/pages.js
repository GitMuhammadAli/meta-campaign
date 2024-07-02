const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    author_id: { type: Number, required: true },
    title: { type: String, required: true },
    excerpt: { type: String },
    body: { type: String },
    image: { type: String },
    slug: { type: String, required: true, unique: true },
    meta_description: { type: String },
    meta_keywords: { type: String },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'INACTIVE', required: true },
    created_at: { type: Date },
    updated_at: { type: Date }
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;
