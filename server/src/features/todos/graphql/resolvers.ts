/**
 * External dependencies.
 */
import { IResolvers } from 'graphql-tools';
import { RepositoryInterface } from '@/features/todos/repositories/RepositoryInterface';

const resolvers: IResolvers = {
    Query: {
        todos(_, __, { TodoRepository }: { TodoRepository: RepositoryInterface }) {
            return TodoRepository.all();
        },
    },
};

export default resolvers;
