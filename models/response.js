const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    status: { type: Number, default: 1, required: true },
    created_at: { type: Date, default: Date.now, required: true },
    updated_at: { type: Date }
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;
