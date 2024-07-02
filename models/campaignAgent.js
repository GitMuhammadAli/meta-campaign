const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignAgentSchema = new Schema({
    campaign_id: { type: Number, required: true },
    user_id: { type: Number, required: true }
});

const CampaignAgent = mongoose.model('CampaignAgent', campaignAgentSchema);

module.exports = CampaignAgent;
