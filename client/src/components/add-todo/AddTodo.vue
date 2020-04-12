<template>
    <div>
        <input type="text" name="todo-name" v-model="name" />
        <button type="submit" @click="addTodo">ADd todo</button>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { Component, Vue } from 'vue-property-decorator';
/**
 * Internal dependencies.
 */
import { createTodoMutation } from '@/features/todos/queries-and-mutations/mutations';
import { getAllTodosQuery } from '@/features/todos/queries-and-mutations/queries';
import { Todo } from '@/features/todos/models/Todo';

@Component
export default class AddTodo extends Vue {
    name = '';

    addTodo() {
        this.$apollo.mutate({
            mutation: createTodoMutation,
            variables: {
                name: this.name,
            },
            update(cache, response) {
                const data = cache.readQuery<{ todos: Todo[] }>({ query: getAllTodosQuery });

                cache.writeQuery({
                    query: getAllTodosQuery,
                    data: {
                        todos: [...data!.todos, response!.data!.createTodo],
                    },
                });
            },
            optimisticResponse: {
                __typename: 'Mutation',
                createTodo: {
                    __typename: 'Todo',
                    id: Math.random(),
                    name: 'Something beautiful is coming!',
                },
            },
        });
        this.name = '';
    }
}
</script>
