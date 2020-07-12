import mongoose from 'mongoose';
import shortid from 'shortid';

const ToDoItemSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: shortid.generate,
    },
    description: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    }
}, { collection: 'toDoItems', timestamps: true });

const ToDoItems = mongoose.model('toDoItems', ToDoItemSchema);
export default ToDoItems;
