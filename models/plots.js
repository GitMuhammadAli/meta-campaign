const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plotSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    pr_id: { type: Number, required: true },
    bl_id: { type: Number, required: true },
    name: { type: String },
    length: { type: Number },
    width: { type: Number },
    size: { type: Number },
    payment_type: { type: String },
    file_no: { type: Number },
    street: { type: String },
    price: { type: Number },
    attach_plot: { type: String },
    feature: { type: String },
    status: { type: String },
    location_title: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
    is_booked: { type: String },
    office_no: { type: String },
    customer_id: { type: Number },
    phone: { type: String },
    cnic: { type: String },
    customer_type: { type: String },
    customer_name: { type: String },
    customer_phone: { type: String },
    file_type: { type: String },
    description: { type: String },
    added_by: { type: Number },
    customer_rel: { type: String }
});

const Plot = mongoose.model('Plot', plotSchema);

module.exports = Plot;
