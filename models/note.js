const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    type: { type: Number },
    notes: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date }
});

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;
