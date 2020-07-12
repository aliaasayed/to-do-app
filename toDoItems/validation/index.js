import Joi from 'joi';

export default {
    getItem: {
        params: Joi.object().keys({
            id: Joi.string().required()
        })
    },

    getAllItems: {
        query: Joi.object().keys({
            description: Joi.string().optional()
        }).required()
    },


    createItem: {
        body: Joi.object().keys({
            description: Joi.string().required()
        }).required()
    },

    updateItem: {
        params: Joi.object().keys({
            id: Joi.string().required()
        }).required(),
        body: Joi.object().keys({
            description: Joi.string().optional(),
            state: Joi.string().optional()
        }).required()
    },


    deleteItem: {
        params: Joi.object().keys({
            id: Joi.string().required()
        }).required()
    }
};
