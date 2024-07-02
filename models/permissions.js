const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const permissionSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    key: { type: String, required: true, index: true },
    table_name: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date }
});

const Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;
