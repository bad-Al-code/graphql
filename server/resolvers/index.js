import { mergeResolvers } from '@graphql-tools/merge';

import transactionResolver from './transaction.resolver.js';
import userResolver from './user.resolver.js';

const mergedResolver = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolver;
