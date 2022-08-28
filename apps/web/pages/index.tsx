import { gql } from '@apollo/client';
import { CDN } from '@data';
import { HeroSection, HostedSection, IntroSection } from 'components/Sections';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { Fragment } from 'react';
import { client } from '../lib/apollo';

const imgPath = `${CDN}/home`;

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
	const results = await client.query({
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
			copy: results.data.homePages[0].copy.document,
			heroImage: results.data.homePages[0].heroImage.url,
			youtubeLink: results.data.homePages[0].youtubeUrl,
		},
		revalidate: 60,
	};
}
