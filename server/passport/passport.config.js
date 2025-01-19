import passport from 'passport';
import bcrypt from 'bcryptjs';
import { GraphQLLocalStrategy } from 'graphql-passport';

import User from '../models/user.model.js';

export const configurePassport = async () => {
    passport.serializeUser((user, data) => {
        console.log('Serializing user');
        document(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        console.log('deserialize');

        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error);
        }
    });

    passport.use(
        new GraphQLLocalStrategy(async (username, passport, done) => {
            try {
                const user = await User.findOne({ username });
                if (!user) {
                    throw new Error('Invalid credentials');
                }

                const validPassword = await bcrypt.compare(
                    passport,
                    user.password,
                );

                if (!validPassword) {
                    throw new Error('Invalid credentials');
                }

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }),
    );
};
