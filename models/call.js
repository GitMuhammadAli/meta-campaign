const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const callSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    lead_id: { type: Number },
    type: { type: String },
    agent_id: { type: Number },
    date: { type: Date },
    description: { type: String },
    call_type: { type: String },
    call_status: { type: String },
    followup_status: { type: String },
    status: { type: Number },
    created_at: { type: Date },
    updated_at: { type: Date },
    created_by: { type: Number }
});

const Call = mongoose.model('Call', callSchema);

module.exports = Call;
