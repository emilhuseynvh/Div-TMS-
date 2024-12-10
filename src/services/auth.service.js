const User = require("../models/auth.model");
const { DublicateError } = require("../utils/error.util");

const login = (params) => {

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