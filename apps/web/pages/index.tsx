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
	error?: string
}

const Home: NextPage<Props> = ({ copy, heroImage, youtubeLink, error }) => {
	if (error) {
		console.error(error)
	}
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
	let homePages;
	try {
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

		homePages = data.homePages[0]
	} catch (e) {
		homePages = { ...fallbackData.data.homePages[0], e }


	}


	return {
		props: {
			copy: homePages.copy.document,
			heroImage: homePages.heroImage.url,
			youtubeLink: homePages.youtubeUrl,
			error: homePages.e || null
		},
		revalidate: 60,
	};

}
