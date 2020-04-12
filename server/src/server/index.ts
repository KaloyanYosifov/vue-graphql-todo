/**
 * External dependencies.
 */
import { ApolloServer } from 'apollo-server';

/**
 * Internal dependencies.
 */
import schema from '@/features/todos/graphql';
import TodoRepository from '@/features/todos/repositories/TodoRepository';

const server = new ApolloServer({
    schema,
    context() {
        return { TodoRepository };
    },
});

server.listen()
    .then(({ url }) => {
        console.log(`Listening on ${url}`);
    });
