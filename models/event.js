const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    lead_id: { type: Number },
    status: { type: String },
    title: { type: String },
    start: { type: Date },
    end: { type: Date },
    created_at: { type: Date },
    updated_at: { type: Date },
    even: { type: String },
    created_by: { type: Number }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
