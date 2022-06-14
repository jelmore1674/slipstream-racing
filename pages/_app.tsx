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
						<meta
							name='description'
							content='Slipstream Racing is an online sim racing community, formed in 2020. We primarily have series in Assetto Corsa Competizione (ACC).'
						/>
						<meta
							name='twitter:card'
							content='summary_large_image'
						/>
						<meta
							property='twitter:image'
							content={`${CDN}/home/logo.png`}
						/>

						{/* Open Graph */}
						<meta
							property='og:url'
							content={`https://slipstreamracing.net`}
							key='ogurl'
						/>
						<meta property='og:type' content='article' />
						<meta
							property='og:image'
							content={`${CDN}/home/logo.png`}
							key='ogimage'
						/>
						<meta
							property='og:image:secure_url'
							content={`${CDN}/home/logo.png`}
							key='ogimagesecureurl'
						/>
						<meta property='og:image:width' content='500' />
						<meta property='og:image:height' content='500' />
						<meta
							property='og:site_name'
							content='Slipstream Racing'
							key='ogsitename'
						/>
						<meta
							property='og:title'
							content={'Slipstream Racing'}
							key='ogtitle'
						/>
						<meta
							property='og:description'
							content='Slipstream Racing is an online sim racing community, formed in 2020. We primarily have series in Assetto Corsa Competizione (ACC).'
							key='ogdesc'
						/>
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
