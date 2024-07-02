const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const translationSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    table_name: { type: String, required: true },
    column_name: { type: String, required: true },
    foreign_key: { type: Number, required: true },
    locale: { type: String, required: true },
    value: { type: String, required: true },
    created_at: { type: Date },
    updated_at: { type: Date }
});

const Translation = mongoose.model('Translation', translationSchema);

module.exports = Translation;
