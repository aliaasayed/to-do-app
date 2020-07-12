import Joi from 'joi';

export default {
    signup: {
        body: Joi.object().keys({
            userName: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required()
        }).required()
    },

    login: {
        body: Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required()
        }).required()
    }
};
