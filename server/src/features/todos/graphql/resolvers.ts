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
        updateTodo(_, { input }, { TodoRepository }: Context) {
            return TodoRepository.update(new Todo({ ...input })).getAttributes();
        },
        deleteTodo(_, { input }, { TodoRepository }: Context) {
            return {
                id: TodoRepository.remove(input.id),
            };
        },
    },
};

export default resolvers;
