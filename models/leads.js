const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OnlyleadSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String },
    Category_id: { type: Number },
    email: { type: String },
    phone: { type: String },
    project_name: { type: Number },
    allocated_to: { type: String },
    sale_man: { type: Number },
    description: { type: String },
    city: { type: String },
    country: { type: String },
    type: { type: String },
    status: { type: String },
    comment_id: { type: Number },
    campaign_id: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date },
    created_by: { type: Number },
    active_reminder: { type: String },
    temperature: { type: String },
    source: { type: String },
    response: { type: String },
    partner: { type: String },
    qty: { type: Number },
    stock_title: { type: String },
    stock_number: { type: String },
    company_name: { type: String },
    interested: { type: String },
    reason: { type: String }
});

const Lead = mongoose.model('Lead', OnlyleadSchema);

module.exports = Lead;
