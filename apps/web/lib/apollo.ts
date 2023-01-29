import { ApolloClient, InMemoryCache } from '@apollo/client';

// Apollo Client
export const client = new ApolloClient({
	uri: 'https://cms.slipstreamracing.net/api/graphql',
	cache: new InMemoryCache(),
});
