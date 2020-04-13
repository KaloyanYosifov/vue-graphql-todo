<template>
    <div>
        <input type="text" name="todo-name" v-model="name" />
        <button type="submit" @click="editTodo">Edit Todo</button>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

/**
 * Internal dependencies.
 */
import { Todo } from '@/features/todos/models/Todo';
import { getAllTodosQuery } from '@/features/todos/queries-and-mutations/queries';
import { updateTodoMutation } from '@/features/todos/queries-and-mutations/mutations';

@Component
export default class AddTodo extends Vue {
    @Prop({ type: Object, required: true }) todo!: Todo;

    name = '';

    @Watch('todo', { immediate: true })
    onTodoChange(value: Todo) {
        this.name = value.name;
    }

    editTodo() {
        const todoId = this.todo.id;

        this.$apollo.mutate({
            mutation: updateTodoMutation,
            variables: {
                input: {
                    id: todoId,
                    name: this.name,
                },
            },
            update(cache, response) {
                const todosData = cache.readQuery<{ todos: Todo[] }>({ query: getAllTodosQuery });

                cache.writeQuery({
                    query: getAllTodosQuery,
                    data: {
                        todos: todosData!.todos.map(todo => {
                            if (todo.id === todoId) {
                                return {
                                    ...response.data.updateTodo,
                                };
                            }

                            return todo;
                        }),
                    },
                });
            },
        });

        this.$emit('updated');
    }
}
</script>
