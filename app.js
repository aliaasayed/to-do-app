import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import toDoRoutes from './src/toDoItems'
import userRoutes from './src/users'
import User from './src/users/model'
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { secretKey } from './src/config/config'
mongoose.connect("mongodb://localhost:27017/todolist",
    { useUnifiedTopology: true, useNewUrlParser: true }
);


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
};

passport.use(new Strategy(opts, async (jwt_payload, done) => {
    const user = await User.findOne({ _id: jwt_payload._id });
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
}));

const server = express();
server.use(passport.initialize());
server.use(express.json());
server.use(bodyParser.json({ limit: '1mb' }));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

server.use("/todo", toDoRoutes);
server.use("/user", userRoutes);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
});