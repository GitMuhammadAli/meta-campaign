const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String },
  slug: { type: String, required: true, unique: true },
  status: { type: String, enum: ['published', 'draft' , 'pending'], default: 'draft' },
  category: { type: String , enum:['category1', 'category2'] },
  featured: { type: Boolean, default: false },
  image: { type: String },
  seo: {
    metaDescription: { type: String },
    metaKeywords: { type: [String] },
    seoTitle: { type: String }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
