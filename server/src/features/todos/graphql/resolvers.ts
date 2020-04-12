/**
 * External dependencies.
 */
import { IResolvers } from 'graphql-tools';
import { Context } from '@/server';
import Todo from '@/features/todos/models/Todo';

const resolvers: IResolvers = {
    Query: {
        todos(_, __, { TodoRepository }: Context) {
            return TodoRepository.all().map(todo => todo.getAttributes());
        },
    },
    Mutation: {
        createTodo(_, { input }, { TodoRepository }: Context) {
            return TodoRepository.create(
                new Todo({ name: input.name }),
            ).getAttributes();
        },
    },
};

export default resolvers;
