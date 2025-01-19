import { mergeTypeDefs } from '@graphql-tools/merge';

import userTypeDeaf from './user.typeDef.js';
import transactionTypeDef from './transaction.typeDef.js';

const mergedTypeDefs = mergeTypeDefs([userTypeDeaf, transactionTypeDef]);

export default mergedTypeDefs;
