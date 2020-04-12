/**
 * Internal dependencies.
 */
import { ID } from '@/types';
import Model from '@/features/todos/models/Model';

export interface RepositoryInterface {
    create(model: Model): Model;

    find(filters: any): Model[];

    remove(id: ID): any;

    all(): Model[];
}
