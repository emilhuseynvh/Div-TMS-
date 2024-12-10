const express = require('express');
const config = require('./src/config');
require('./src/config/database');
const router = require('./src/routes');
const cors = require('cors');
const errorMiddleware = require('./src/middleware/error.middleware');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.use(errorMiddleware);

app.listen(config.port, () => {
    console.log(`application is running on http://localhost:${config.port}`);
})