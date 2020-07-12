import { UNAUTHORIZED } from 'http-status';
import passport from 'passport';
const auth = () => {
    return (req, res, next) => {        
        if (!req.headers.authorization) {
            return res.status(UNAUTHORIZED).json({
                message: 'Invalid authorization token or API key.',
            });
        }

        if (!req.headers.authorization) {
            return res.status(UNAUTHORIZED).json({
                message: 'Invalid authorization token.',
            });
        }

        passport.authenticate('jwt', { session: false }, async (err, user) => {
            if (user) {
                req.user = user;
                return next();
            } else if (err || !user) {
                return res.status(UNAUTHORIZED).json({
                    message: 'Invalid authorization token.',
                });
            }
        })(req, res, next);
    };
};
export default auth;