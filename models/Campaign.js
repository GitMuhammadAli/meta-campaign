const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    campaignId: { type: String, required: true },
    accountId: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    createdTime: { type: Date, required: true },
    updatedTime: { type: Date, required: true },
});

module.exports = mongoose.model('Campaign', CampaignSchema);
