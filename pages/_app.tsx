import { ApolloProvider } from '@apollo/client';
import { NavContextProvider } from '@context';
import { CDN } from '@data';
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../layouts/layout';
import { client } from '../lib/apollo';
import { globalStyles, theme } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<NavContextProvider>
					<Head>
						<title>Slipstream Racing</title>
						<link rel='icon' href={`${CDN}/favicon.png`} />
						<meta
							name='viewport'
							content='width=device-width, initial-scale=1'></meta>
					</Head>
					<Global styles={globalStyles} />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</NavContextProvider>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default MyApp;
