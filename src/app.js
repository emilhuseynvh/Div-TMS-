const express = require('express');
const config = require('./config');
require('./config/database');
const router = require('./routes');
const cors = require('cors');
const errorMiddleware = require('./middleware/error.middleware');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.use(errorMiddleware);

app.listen(config.port, () => {
    console.log(`application is running on http://localhost:${config.port}`);
})