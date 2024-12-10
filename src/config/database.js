const mongoose = require('mongoose');
const config = require('.');

mongoose.connect(config.databaseURL).then(() => {
    console.log('database connnected succesfully');
}).catch((err) => {
    console.log('database connnection error', err);
})