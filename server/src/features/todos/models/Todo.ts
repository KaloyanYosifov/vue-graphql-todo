/**
 * External dependencies.
 */
import { v4 as uuidv4 } from 'uuid';

/**
 * Internal dependencies.
 */
import { ID } from '@/types';

class Todo {
    constructor(
        protected id: ID = uuidv4(),
        protected name: string = '',
    ) {}

    setId(id: ID) {
        this.id = id;

        return this;
    }

    setName(name: string) {
        this.name = name;

        return this;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getAttributes() {
        const { id = uuidv4(), name } = this;

        return {
            id,
            name,
        };
    }

    static getTable() {
        return 'todos';
    }
}

export default Todo;
