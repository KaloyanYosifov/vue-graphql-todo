/**
 * Internal dependencies.
 */
import gql from 'graphql-tag';

export const createTodoMutation = gql`
    mutation createTodo($name: String!) {
        createTodo(input: { name: $name }) {
            id
            name
        }
    }
`;

export const updateTodoMutation = gql`
    mutation updateTodo($input: UpdateTodoInput!) {
        updateTodo(input: $input) {
            id
            name
        }
    }
`;

export const deleteTodoQuery = gql`
    mutation deleteTodo($id: ID!) {
        deleteTodo(input: {id: $id}) {
            id
        }
    }
`;
