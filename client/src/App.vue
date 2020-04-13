<template>
    <div id="app">
        Hello There

        <edit-todo v-if="selectedTodo" :todo="selectedTodo" @updated="selectedTodo = null" />

        <div v-else>
            <add-todo />

            <div v-if="todos && todos.length">
                <div :key="todo.id" v-for="todo in todos" @click="removeTodo(todo.id)">
                    <p>
                        Id: {{todo.id}}
                    </p>

                    <p>
                        Name: {{todo.name}}
                    </p>

                    <button @click.prevent.stop="selectedTodo = todo">
                        Edit todo
                    </button>
                </div>
            </div>
        </div>
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
import { Todo } from '@/features/todos/models/Todo';
import AddTodo from '@/components/add-todo/AddTodo.vue';
import { getAllTodosQuery } from '@/features/todos/queries-and-mutations/queries';
import { deleteTodoQuery } from '@/features/todos/queries-and-mutations/mutations';
import EditTodo from '@/components/edit-todo/EditTodo.vue';

@Component({
    components: { EditTodo, AddTodo },
    apollo: {
        todos: {
            query: getAllTodosQuery,
        },
    },
})
export default class App extends Vue {
    protected todos!: Todo[];

    protected selectedTodo: Todo | null = null;

    removeTodo(id: string | number) {
        this.$apollo.mutate({
            mutation: deleteTodoQuery,
            variables: {
                id,
            },
            update(cache) {
                const data = cache.readQuery<{ todos: Todo[] }>({
                    query: getAllTodosQuery,
                });

                cache.writeQuery({
                    query: getAllTodosQuery,
                    data: {
                        todos: data!.todos.filter(todo => todo.id !== id),
                    },
                });
            },
        });
    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
