const {HttpError} = require("../helpers/index");

const validateBody = schema => {
    const func = (req, res, next)=> {
        const { error } = schema.validate(req.body);
        if (error) {
            next(HttpError(400, error.message));
        }
        next()
    }

    return func;
};

const validateBodyFavorite = schema => {
    const func = (req, res, next)=> {
        const { error } = schema.validate(req.body);
        if (error) {
            next(HttpError(400, error.message="missing field favorite"));
        }
        next()
    }

    return func;
}

module.exports = {
    validateBody, 
    validateBodyFavorite,
};