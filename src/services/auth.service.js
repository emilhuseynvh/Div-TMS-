const User = require("../models/auth.model");
const { DublicateError, AppError } = require("../utils/error.util");
const bcrypt = require('bcrypt');
const { decodeToken, encodePayload } = require("../utils/jwt.util");

const login = async (params) => {
    let user = await User.findOne({ email: params.email }).lean();
    if (!user) throw new AppError('Email or password is not valiud', 400);


    let password = await bcrypt.compare(params.password, user.password);
    console.log(password);

    if (!password) throw new AppError('Email or password is not valiud', 400);

    let token = encodePayload(user);

    return {
        token,
        user
    }
}

const register = async (params) => {
    let existingUser = await User.findOne({ email: params.email }).lean();

    if (existingUser) throw new DublicateError('This user is already exists');

    let user = new User(params);

    await user.save();
    return user;
}

const authService = {
    login,
    register
}

module.exports = authService;