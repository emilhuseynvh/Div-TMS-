const Joi = require('joi');

const login = Joi.object({
    email: Joi.string().email().required().trim(),
    password: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
        .required()
        .trim()
        .messages({
            'string.pattern.base': 'Şifrə ən azı 8 simvol uzunluğunda olmalı, bir böyük hərf, bir kiçik hərf, bir rəqəm və bir xüsusi simvol (@, $, !, %, *, ?, &) içerməlidir.'
        })
});

const register = Joi.object({
    email: Joi.string().email().required().trim(),
    password: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$'))
        .required()
        .trim()
        .messages({
            'string.pattern.base': 'Şifrə ən azı 8 simvol uzunluğunda olmalı, bir böyük hərf, bir kiçik hərf və bir rəqəm içerməlidir.'
        })
});

module.exports = {
    login,
    register
};
