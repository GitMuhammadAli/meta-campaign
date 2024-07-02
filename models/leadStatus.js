const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadStatusSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    status: { type: Number, required: true, default: 1 },
    created_at: { type: Date, default: Date.now, required: true },
    updated_at: { type: Date },
    order_level: { type: Number },
    icon: { type: String },
    btn_color: { type: String }
});

const LeadStatus = mongoose.model('LeadStatus', leadStatusSchema);

module.exports = LeadStatus;
  