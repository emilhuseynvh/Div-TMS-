class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

class ValidationError extends Error {
    constructor(message = "Validation error") {
        super(message);
        this.statusCode = 400;
    }
}

class UnauthorizedError extends Error {
    constructor(message = "Unauthorized") {
        super(message);
        this.statusCode = 401;
    }
}

class DublicateError extends Error {
    constructor(message = "Conflict") {
        super(message);
        this.statusCode = 409;
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}

module.exports = {
    AppError,
    ValidationError,
    UnauthorizedError,
    DublicateError,
    NotFoundError,
};