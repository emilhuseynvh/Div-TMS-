const jwt = require('jsonwebtoken');
const config = require('../config');

const encodePayload = (payload) => {
    let token = jwt.sign(payload, config.secretKey, { expiresIn: '1h' });
    return token;
}

const decodeToken = (token) => {
    try {
        let decoded = jwt.decode(token, config.secretKey);
        return decoded;
    } catch {
        return false
    }
}

module.exports = {
    encodePayload,
    decodeToken
}