/**
 * Internal dependencies.
 */
import gql from 'graphql-tag';

export const createTodoQuery = gql`
    mutation createTodo($name: String!) {
        createTodo(input: { name: $name }) {
            id
            name
        }
    }
`;
