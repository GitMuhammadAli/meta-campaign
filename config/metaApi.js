const axios = require('axios');

const BASE_URL = 'https://graph.facebook.com/v11.0';

const getCampaigns = async (accountId, accessToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/act_${accountId}/campaigns`, {
            params: {
                access_token: accessToken,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching campaigns:', error);
        throw error;
    }
};

const createCampaign = async (accountId, campaignData, accessToken) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/act_${accountId}/campaigns`,
            campaignData,
            {
                params: {
                    access_token: accessToken,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error creating campaign:', error);
        throw error;
    }
};

const getAds = async (campaignId, accessToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/${campaignId}/ads`, {
            params: {
                access_token: accessToken,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching ads:', error);
        throw error;
    }
};

const getAdInsights = async (adId, accessToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/${adId}/insights`, {
            params: {
                access_token: accessToken,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching ad insights:', error);
        throw error;
    }
};

module.exports = {
    getCampaigns,
    createCampaign,
    getAds,
    getAdInsights,
};
