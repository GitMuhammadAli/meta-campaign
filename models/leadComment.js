const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadCommentSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    lead_id: { type: Number, required: true },
    comments: { type: String, required: true },
    created_by: { type: Number, required: true },
    created_at: { type: Date, default: Date.now, required: true },
    updated_at: { type: Date }
});

const LeadComment = mongoose.model('LeadComment', leadCommentSchema);

module.exports = LeadComment;
