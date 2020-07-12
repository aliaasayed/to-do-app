import mongoose from 'mongoose';
import shortid from 'shortid';

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: shortid.generate
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { collection: 'users', timestamps: true });

const Users = mongoose.model('users', UserSchema);
export default Users;
