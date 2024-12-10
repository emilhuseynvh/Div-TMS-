const { Router } = require('express');
const validationMiddleware = require('../middleware/validation.middleware');
const { login, register } = require('../validations/user.validation');
const authController = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post('/login', validationMiddleware(login), authController.login);
authRouter.post('/register', validationMiddleware(register), authController.register);

module.exports = authRouter;