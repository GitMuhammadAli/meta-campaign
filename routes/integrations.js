const express = require('express');
const router = express.Router();
const { createIntegration , getIntegrations} = require('../controller/integrations');

router.post('/', createIntegration);
router.get('/Get', getIntegrations);
module.exports = router;
