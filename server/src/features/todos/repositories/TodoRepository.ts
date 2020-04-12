/**
 * Internal dependencies.
 */
import { ID } from '@/types';
import db from '@/database';
import Todo from '@/features/todos/models/Todo';

interface TodoFilters {
    id?: ID;
    name?: string;
}

class TodoRepository {
    create(todo: Todo) {
        db.get(Todo.getTable())
            .push(todo.getAttributes())
            .write();

        return todo;
    }

    find(filters?: TodoFilters) {
        return db.get(Todo.getTable())
            .filter(filters)
            .value();
    }

    remove(id: ID) {
        return db.get(Todo.getTable())
            .remove({ id })
            .write();
    }
}

export default TodoRepository;
