import {  OK, BAD_REQUEST } from 'http-status';

import UserService from '../services/userService';

export default {
    signUp: async (req, res) => {
        try {
            const results = await UserService.signUp(req.body);
            delete results.password;
            return res.status(OK).json({ results });
        } catch (err) {
            return res.status(BAD_REQUEST).json({ message: err.message });
        }
    },

    login: async (req, res) => {
        try {            
            const results = await UserService.login(req.body);
            return res.status(OK).json({ results });
        } catch (err) {            
            return res.status(BAD_REQUEST).json({ message: err.message });
        }
    }
};
