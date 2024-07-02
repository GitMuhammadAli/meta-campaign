const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    event_id: { type: Number, required: true },
    event_value: { type: Number, required: true },
    msg_from: { type: Number, required: true },
    msg_to: { type: Number, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    path: { type: String, required: true },
    status: { type: Number, required: true },
    created_at: { type: Date },
    updated_at: { type: Date }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
