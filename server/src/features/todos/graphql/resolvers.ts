/**
 * External dependencies.
 */
import { IResolvers } from 'graphql-tools';

const resolvers: IResolvers = {
    Query: {
        todos() {
            return [{
                id: 'random',
                name: 'Todo',
            }];
        },
    },
};

export default resolvers;
