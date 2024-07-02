const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, index: true },
    display_name: { type: String, required: true },
    created_at: { type: Date },
    updated_at: { type: Date }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
