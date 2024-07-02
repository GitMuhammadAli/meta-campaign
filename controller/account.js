const Integration = require('../models/Integration');
const { getAds, getAdInsights } = require('../config/metaApi');

exports.getAds = async (req, res) => {
    try {
        const integration = await Integration.findOne({ company: req.params.company });
        if (!integration) return res.status(404).json({ msg: 'Integration not found' });

        const ads = await getAds(req.params.campaignId, integration.token);
        res.json(ads);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.getAdInsights = async (req, res) => {
    try {
        const integration = await Integration.findOne({ company: req.params.company });
        if (!integration) return res.status(404).json({ msg: 'Integration not found' });

        const adInsights = await getAdInsights(req.params.adId, integration.token);
        res.json(adInsights);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
