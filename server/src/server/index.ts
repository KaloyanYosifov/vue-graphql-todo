/**
 * External dependencies.
 */
import { ApolloServer } from 'apollo-server';

/**
 * Internal dependencies.
 */
import schema from '@/features/todos/graphql';

const server = new ApolloServer({
    schema,
});

server.listen()
    .then(({ url }) => {
        console.log(`Listening on ${url}`);
    });
