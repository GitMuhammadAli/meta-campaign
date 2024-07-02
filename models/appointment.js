const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    type: { type: Number },
    DATE: { type: String, required: true },
    contact: { type: String },
    email: { type: String },
    subject: { type: String },
    description: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
