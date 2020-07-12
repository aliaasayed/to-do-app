import express from 'express';
import validateRequest from '../middleWares/validateRequest';
import ValidationSchema from './validation';
import Controller from './controller';

const Router = express.Router();
Router.post('/signup',
    validateRequest(ValidationSchema.signup),
    Controller.signUp);

Router.post('/login',
    validateRequest(ValidationSchema.login),
    Controller.login);

module.exports = Router;
