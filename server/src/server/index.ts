/**
 * External dependencies.
 */
import { ApolloServer } from 'apollo-server';

/**
 * Internal dependencies.
 */
import schema from '@/features/todos/graphql';
import { TodoData } from '@/features/todos/models/Todo';
import TodoRepository from '@/features/todos/repositories/TodoRepository';
import { RepositoryInterface } from '@/features/todos/repositories/RepositoryInterface';

export interface Context {
    TodoRepository: RepositoryInterface<TodoData>;
}

const server = new ApolloServer({
    schema,
    context(): Context {
        return { TodoRepository };
    },
});

server.listen()
    .then(({ url }) => {
        console.log(`Listening on ${url}`);
    });
