import { gql } from '@apollo/client';
import { CDN } from '@data';
import { HeroSection, HostedSection, IntroSection } from 'components/Sections';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { client } from '../lib/apollo';

const imgPath = `${CDN}/home`;

const Home: NextPage = ({ data }: any) => {
	const { copy, youtubeLink } = data;
	return (
		<Fragment>
			<Head>
				<meta
					name='description'
					content='Generated by create next app'
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
			data: results.data.page.homePage,
		},
	};
}
