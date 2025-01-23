import bcrypt from 'bcryptjs';
import { users } from '../../data/index.js';
import User from '../../models/user.model.js';

const userResolver = {
    Mutation: {
        signUp: async (_, { input }, context) => {
            try {
                const { username, name, password, gender } = input;

                if (!username || !name || !password || !gender) {
                    throw new Error('All fields are required');
                }

                const exitingUser = await User.findOne({ username });

                if (exitingUser) {
                    throw new Error('User already exists');
                }

                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);

                const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
                const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

                const newUser = new User({
                    username,
                    name,
                    password: hashedPassword,
                    gender,
                    profilePicture:
                        gender === 'male' ? boyProfilePic : girlProfilePic,
                });

                await newUser.save();

                await context.login(newUser);

                return newUser;
            } catch (error) {
                console.error('Error in SignUp: ', error);
                throw new Error(error.message || 'Internal Server Error');
            }
        },
    },

    Query: {
        users: () => {
            return users;
        },

        user: (_, { userId }) => {
            return users.find((user) => user._id === userId);
        },
    },
};

export default userResolver;
