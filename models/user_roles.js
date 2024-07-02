const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRoleSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    role_id: { type: Schema.Types.ObjectId, ref: 'Role', required: true, index: true }
});

const UserRole = mongoose.model('UserRole', userRoleSchema);

module.exports = UserRole;
