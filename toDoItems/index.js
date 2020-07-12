import express from 'express';
import auth from '../middleWares/auth';
import validateRequest from '../middleWares/validateRequest';
import ValidationSchema from './validation';
import Controller from './controller';
const Router = express.Router();

Router.post('/',
    auth(),
    validateRequest(ValidationSchema.createItem),
    Controller.createItem);

Router.get('/',
    auth(),
    validateRequest(ValidationSchema.getAllItems),
    Controller.getAllItems);

Router.put('/:id',
    auth(),
    validateRequest(ValidationSchema.updateItem),
    Controller.updateItem);

Router.get('/:id',
    auth(),
    validateRequest(ValidationSchema.getItem),
    Controller.getItem);

Router.delete('/:id',
    auth(),
    validateRequest(ValidationSchema.deleteItem),
    Controller.deleteItem);

export default Router;
