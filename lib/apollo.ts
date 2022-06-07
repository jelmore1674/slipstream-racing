import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: ' http://slipstream-wordpress.local/graphql',
	cache: new InMemoryCache(),
});

export const slipClient = new ApolloClient({
	uri: 'https://slipstreamracing.net/graphql',
	cache: new InMemoryCache(),
});
