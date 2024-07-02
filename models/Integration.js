const mongoose = require('mongoose');

const IntegrationSchema = new mongoose.Schema({
    platform: { type: String, required: true },
    accountId: { type: String, required: true },
    company: { type: String, required: true },
    reference: { type: String, required: true },
    appId: { type: String, required: true },
    token: { type: String, required: true },
    appSecret: { type: String, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Integration', IntegrationSchema);
