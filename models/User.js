const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: Schema.Types.ObjectId, required: true, index: true },
    role_id: { type: Schema.Types.ObjectId, ref: 'Role', index: true },
    name: { type: String, required: true },
    project_name: { type: Number },
    status: { type: String ,enum: ['Active', 'Inactive'], default: 'Active', required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default: 'users/default.png' },
    whatsp_num: { type: String },
    email_verified_at: { type: Date },
    password: { type: String, required: true },
    remember_token: { type: String },
    settings: { type: Schema.Types.Mixed },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date },
    background: { type: String }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
