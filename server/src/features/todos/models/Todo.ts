/**
 * External dependencies.
 */
import { v4 as uuidv4 } from 'uuid';

/**
 * Internal dependencies.
 */
import { ID } from '@/types';
import Model from '@/features/todos/models/Model';

export interface TodoData {
    id?: ID;
    name: string;
}

class Todo extends Model<TodoData> {
    constructor(
        attributes: TodoData,
    ) {
        super(attributes);
    }

    setId(id: ID) {
        this.attributes.id = id;

        return this;
    }

    setName(name: string) {
        this.attributes.name = name;

        return this;
    }

    getId() {
        return this.attributes.id;
    }

    getName() {
        return this.attributes.name;
    }

    getAttributes() {
        return this.attributes;
    }

    protected getDefaults() {
        return {
            id: uuidv4(),
            name: '',
        };
    }

    static getTable() {
        return 'todos';
    }
}

export default Todo;
