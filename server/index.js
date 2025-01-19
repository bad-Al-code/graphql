import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import passport from 'passport';
import connectMongo from 'connect-mongodb-session';
import session from 'express-session';
import { buildContext } from 'graphql-passport';

import mergedResolvers from './schema/resolvers/index.js';
import mergedTypeDefs from './schema/types/index.js';
import { connectDB } from './db/db.js';
import { configurePassport } from './passport/passport.config.js';

configurePassport();

const app = express();

const httpServer = http.createServer(app);

const MongoDBStore = connectMongo(session);

const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: 'sessions',
});

store.on('error', (err) => console.log(err));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 7,
            httpOnly: true,
        },
        store: store,
    }),
);

app.use(passport.initialize());
app.use(passport.session());

const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
    '/',
    cors({
        origin: 'http//localhost:3000',
        credentials: true,
    }),
    express.json(),
    expressMiddleware(server, {
        context: async ({ req, res }) => buildContext({ req, res }),
    }),
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

await connectDB();

console.log(`🚀 Server ready at http://localhost:4000/`);
