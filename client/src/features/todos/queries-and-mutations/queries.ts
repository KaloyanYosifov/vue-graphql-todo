/**
 * External dependencies.
 */
import gql from 'graphql-tag';

export const getAllTodosQuery = gql`
    query GetAllTodos {
        todos {
            id
            name
        }
    }
`;
