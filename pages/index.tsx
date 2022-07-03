import { gql } from '@apollo/client';
import { CDN } from '@data';
import { HeroSection, HostedSection, IntroSection } from 'components/Sections';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { client } from '../lib/apollo';

const imgPath = `${CDN}/home`;

interface Props {
	copy: string;
	youtubeLink: string;
}

const Home: NextPage<Props> = ({ copy, youtubeLink }) => {
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
			<HeroSection backgroundImage={`${imgPath}/hero.png`} />
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
				page(id: "/", idType: URI) {
					homePage {
						copy
						youtubeLink
					}
				}
			}
		`,
	});

	return {
		props: {
			copy: results.data.page.homePage.copy,
			youtubeLink: results.data.page.homePage.youtubeLink,
		},
	};
}
