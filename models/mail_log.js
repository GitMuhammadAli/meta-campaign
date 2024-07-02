const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mailLogSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    from: { type: String },
    to: { type: String },
    message: { type: String },
    status: { type: String, required: true, default: '0' },
    created_at: { type: Date },
    updated_at: { type: Date }
});

const MailLog = mongoose.model('MailLog', mailLogSchema);

module.exports = MailLog;
