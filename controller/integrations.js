const axios = require('axios');
const Integration = require('../models/Integration'); 
exports.createIntegration = async (req, res) => {
    try {
        const { platform, accountId, company, reference, appId, token, appSecret, status } = req.body;

        const response = await axios.post(
            `https://graph.facebook.com/${platform}/accounts`,
            {
                access_token: req.body.accessToken,
                account_id: accountId,
                company: company,
                reference: reference
            }
        );

        console.log('Integration response:', response.data);

        const integration = new Integration({
            platform,
            accountId,
            company,
            reference,
            appId,
            token,
            appSecret,
            status
        });
        const savedIntegration = await integration.save();

        res.status(200).json({ success: true, data: savedIntegration });
    } catch (error) {
        console.error('Integration error:', error);
        res.status(500).json({ success: false, message: 'Integration failed' });
    }
};


exports.getIntegrations = async (req, res) => {
    try {
        const integrations = await Integration.find();
        res.json(integrations);
    } catch (error) {
        res.status(500).send('Server Error');
    }
} 