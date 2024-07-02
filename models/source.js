const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sourceSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    status: { type: Number, default: 1 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date },
    icon: { type: String }
});

const Source = mongoose.model('Source', sourceSchema);

module.exports = Source;
