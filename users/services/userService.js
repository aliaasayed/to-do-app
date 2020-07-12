import User from '../model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { SALT_ROUNDS, secretKey, accessTokenExpiration } from '../../config/config';

class UserService {
    async signUp(params) {

        const user = await User.findOne({ email: params.email });
        if (user)
            throw new Error('Email Already Exist');

        params.email = params.email.toLowerCase();
        params.email = params.email.trim();
        params.password = await bcrypt.hash(params.password, SALT_ROUNDS);
        return User.create(params);
    }

    async login(params) {
        const user = await User.findOne({ email: params.email });
        if (user) {
            const isMatch = await bcrypt.compare(params.password, user.password);
            if (isMatch) {
                const payload = {
                    _id: user._id,
                    email: user._email
                }
                const accessToken = jwt.sign(payload, secretKey, { expiresIn: accessTokenExpiration });
                return {
                    token: accessToken
                }
            }
            else
                throw new Error('Inavlid User name or Password');
        } else
            throw new Error('No Account Found');
    }
}

export default new UserService();
