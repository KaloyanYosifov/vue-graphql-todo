/**
 * External dependencies.
 */
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({
    uri: process.env.VUE_APP_CLIENT_URL,
});
const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    link,
});
const provider = new VueApollo({
    defaultClient: client,
});

export {
    client,
    provider,
};
