export const secretKey = process.env.APP_SECRET || 'the default secret';
export const accessTokenExpiration = process.env.ACCESS_TOKEN_EXPIRATION || '1d';
export const SALT_ROUNDS = 12;