const express = require('express');
const router = express.Router();
const { createCampaign, getCampaigns } = require('../controller/campaigns');

router.post('/', createCampaign);
router.get('/:company', getCampaigns);

module.exports = router;
