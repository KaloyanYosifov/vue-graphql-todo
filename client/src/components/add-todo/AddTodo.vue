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
import { createTodoQuery } from '@/queries-and-mutations/todos/mutations';
import { getAllTodosQuery } from '@/queries-and-mutations/todos/queries';

@Component
export default class AddTodo extends Vue {
    name = '';

    addTodo() {
        this.$apollo.mutate({
            mutation: createTodoQuery,
            variables: {
                name: this.name,
            },
            update(cache, response) {
                const { todos } = cache.readQuery<any>({ query: getAllTodosQuery });

                cache.writeQuery({
                    query: getAllTodosQuery,
                    data: {
                        todos: [...todos, response!.data!.createTodo],
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
