const authService = require("../services/auth.service");

const login = (req, res, next) => {
    try {

    } catch (err) {
        next(err);
    }
}

const register = async (req, res, next) => {
    try {
        const result = await authService.register(req.body);
        console.log(result);
        
        return res.json(result);
    } catch (err) {
        next(err);
    }
}

const authController = {
    login,
    register
}

module.exports = authController;