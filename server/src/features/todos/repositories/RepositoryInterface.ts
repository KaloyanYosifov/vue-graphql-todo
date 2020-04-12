/**
 * Internal dependencies.
 */
import { ID } from '@/types';
import Model from '@/features/todos/models/Model';

export interface RepositoryInterface<T> {
    create(model: Model<T>): Model<T>;

    find(filters: any): Model<T>[];

    remove(id: ID): any;

    all(): Model<T>[];
}
