const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    project_id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now },
    total_marla: { type: Number, required: true }
});

const Block = mongoose.model('Block', blockSchema);

module.exports = Block;
