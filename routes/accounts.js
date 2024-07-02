const express = require('express');
const router = express.Router();
const { getAds, getAdInsights } = require('../controller/account');

router.get('/:company/:campaignId', getAds);
router.get('/insights/:company/:adId', getAdInsights);

module.exports = router;
