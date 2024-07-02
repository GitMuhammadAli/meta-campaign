const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); 
require('dotenv').config();

const app = express();

connectDB();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use('/api/integrations', require('./routes/integrations'));
app.use('/api/campaigns', require('./routes/campaigns'));
app.use('/api/ads', require('./routes/accounts'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} or http://localhost:${PORT}`);
});
