const Campaign = require('../models/Campaign');
const Integration = require('../models/Integration');
const { getCampaigns, createCampaign } = require('../config/metaApi');

exports.createCampaign = async (req, res) => {
    try {
        const integration = await Integration.findOne({ company: req.body.company });
        console.log(integration);
        if (!integration) return res.status(404).json({ msg: 'Integration not found' });

        const newCampaign = await createCampaign(integration.accountId, req.body.campaignData, integration.token);
        const campaign = new Campaign({ ...newCampaign, accountId: integration.accountId });
        await campaign.save();
        res.json(campaign);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.getCampaigns = async (req, res) => {
    try {
        const integration = await Integration.findOne({ company: req.params.company });
        if (!integration) return res.status(404).json({ msg: 'Integration not found' });

        const campaigns = await getCampaigns(integration.accountId, integration.token);
        res.json(campaigns);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
