/**
 * Internal dependencies.
 */
import { ID } from '@/types';
import db from '@/database';
import Todo, { TodoData } from '@/features/todos/models/Todo';
import { RepositoryInterface } from '@/features/todos/repositories/RepositoryInterface';

interface TodoFilters {
    id?: ID;
    name?: string;
}

class TodoRepository implements RepositoryInterface<TodoData> {
    create(todo: Todo) {
        db.get(Todo.getTable())
            .push(todo.getAttributes())
            .write();

        return todo;
    }

    find(filters: TodoFilters) {
        return db.get(Todo.getTable())
            .filter(filters)
            .value()
            .map((todoData: any) => {
                return new Todo({
                    id: todoData.id,
                    name: todoData.name,
                });
            });
    }

    remove(id: ID) {
        db.get(Todo.getTable())
            .remove({ id })
            .write();

        return id;
    }

    all() {
        return db.get(Todo.getTable())
            .value()
            .map((todoData: any) => {
                return new Todo({
                    id: todoData.id,
                    name: todoData.name,
                });
            });
    }
}

const todoRepository = new TodoRepository();
export default todoRepository;
