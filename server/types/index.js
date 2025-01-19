import { mergeResolvers } from '@graphql-tools/merge';

import userTypeDeaf from './user.typeDef.js';
import transactionTypeDef from './transaction.typeDef.js';

const mergedTypeDefs = mergeResolvers([userTypeDeaf, transactionTypeDef]);

export default mergedTypeDefs;
