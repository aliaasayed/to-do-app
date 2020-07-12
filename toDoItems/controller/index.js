import { INTERNAL_SERVER_ERROR, OK, BAD_REQUEST } from 'http-status';

import ToDoItemsService from '../services/toDoItemService';

export default {
    getAllItems: async (req, res, next) => {
        try {
            const results = await ToDoItemsService.getAllItems(req.user, req.query);
            return res.status(OK).json({ results });
        } catch (err) {
            console.log(err);

            return res.status(BAD_REQUEST).json({ message: err.message });
        }
    },

    getItem: async (req, res, next) => {
        try {
            const results = await ToDoItemsService.getItem(req.user, req.params.id);
            return res.status(OK).json({ results });
        } catch (err) {
            return res.status(BAD_REQUEST).json({ message: err.message });
        }
    },

    createItem: async (req, res, next) => {
        try {
            const results = await ToDoItemsService.createItem(req.user, req.body);
            return res.status(OK).json({ results });
        } catch (err) {
            return res.status(BAD_REQUEST).json({ message: err.message });
        }
    },

    updateItem: async (req, res, next) => {
        try {
            const results = await ToDoItemsService.updateItem(req.user, req.params.id, req.body);
            return res.status(OK).json({ results });
        } catch (err) {
            return res.status(BAD_REQUEST).json({ message: err.message });
        }
    },

    deleteItem: async (req, res, next) => {
        try {
            const results = await ToDoItemsService.deleteItem(req.user, req.params.id);
            return res.status(OK).json({ results });
        } catch (err) {
            return res.status(BAD_REQUEST).json({ message: err.message });
        }
    }
};
