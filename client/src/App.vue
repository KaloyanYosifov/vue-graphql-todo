<template>
    <div id="app">
        Hello There

        <add-todo />

        <div v-if="todos && todos.length">
            <div :key="todo.id" v-for="todo in todos">
                <p>
                    Id: {{todo.id}}
                </p>

                <p>
                    Name: {{todo.name}}
                </p>
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
import { getAllTodosQuery } from '@/queries-and-mutations/todos/queries';
import AddTodo from '@/components/add-todo/AddTodo.vue';

@Component({
    components: { AddTodo },
    apollo: {
        todos: {
            query: getAllTodosQuery,
        },
    },
})
export default class App extends Vue {
    protected todos!: { id: string | number; name: string }[];
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
