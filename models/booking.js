const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    customer_id: { type: Number, required: true },
    booking_id: { type: Number, required: true },
    agent_id: { type: Number },
    status: { type: String },
    created_at: { type: String },
    updated_at: { type: String },
    created_by: { type: Number, required: true },
    updated_by: { type: Number },
    deleted_by: { type: Number },
    type: { type: String },
    file: { type: String },
    cnic: { type: String },
    delivered_at: { type: Date },
    qr_code: { type: String }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
