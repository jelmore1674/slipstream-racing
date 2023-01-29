import { gql } from '@apollo/client';
import { CDN } from '@data';
import { HeroSection, HostedSection, IntroSection } from '@components';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { Fragment } from 'react';
import { client } from '../lib/apollo';
import fallbackData from '../data/homePage.json'

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
	const { data } = await client.query({
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

	const [homePages] = data.homePages


	return {
		props: {
			copy: homePages.copy.document,
			heroImage: homePages.heroImage.url,
			youtubeLink: homePages.youtubeUrl,
		},
		revalidate: 60,
	};

}
