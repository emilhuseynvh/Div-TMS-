const authService = require("../services/auth.service");

const login = async (req, res, next) => {
    try {
        const result = await authService.login(req.body);
        if (!result) throw new AppError('Email or password is not valiud', 400);

        res.status(200).json({ message: "User logged succesfully", result })
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