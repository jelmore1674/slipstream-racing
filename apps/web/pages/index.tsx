import { gql } from '@apollo/client';
import { CDN } from '@data';
import { HeroSection, HostedSection, IntroSection } from '@components';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { Fragment } from 'react';
import { client } from '../lib/apollo';

const imgPath = `${CDN}/home`;

// Props returned from query
interface Props {
	copy: string;
	heroImage: string;
	youtubeLink: string;
}

const Home: NextPage<Props> = ({ copy, heroImage, youtubeLink }) => {
	return (
		<Fragment>
			<Head>
				<title>Home | Slipstream Racing</title>
				<meta
					property='og:title'
					content='Home | Slipstream Racing'
					key='ogtitle'
				/>
			</Head>
			<HeroSection backgroundImage={heroImage} />
			<IntroSection copy={copy} youtubeLink={youtubeLink} />
			<HostedSection src={`${imgPath}/simracinggp-wordmark.svg`} />
		</Fragment>
	);
};

export default Home;

export async function getStaticProps() {
	try {
		const [{ data }]: any = await client.query({
			query: gql`
				query GetHomePage {
					homePages {
						copy {
							document
						}
						heroImage {
							url
						}
						youtubeUrl
					}
				}
			`,
		});

		return {
			props: {
				copy: data.homePages.copy.document,
				heroImage: data.homePages.heroImage.url,
				youtubeLink: data.homePages.youtubeUrl,
			},
			revalidate: 60,
		};
	} catch (error) {
		console.log({ error })

	}
}
