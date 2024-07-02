const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const integrationSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    platform: { type: String, required: true },
    company_id: { type: String, required: true },
    account_id: { type: String },
    app_id: { type: String },
    token: { type: Schema.Types.Mixed },
    app_secret: { type: String },
    redirect_url: { type: String },
    status: { type: String, required: true, default: 'Active' },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date }
});

const Integration = mongoose.model('Integration', integrationSchema);

module.exports = Integration;
