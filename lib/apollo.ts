import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri:
		process.env.NODE_ENV === 'development'
			? 'http://slipstream-wordpress.local/graphql'
			: process.env.GRAPHQL_API,
	cache: new InMemoryCache(),
});
