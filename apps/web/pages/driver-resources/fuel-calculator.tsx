import { SeoData } from '@types';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { Fragment } from 'react';

const seoData = {
	url: 'https://slipstreamracing.net/driver-resources/fuel-calculator',
	title: 'Fuel Calculator | Slipstream Racing',
	description:
		'Need help planning your race strategy. Check out the Fuel Calculator created by Intuition Labs Development!',
};

interface Props {
	seoData: SeoData;
}

const FuelCalculator: NextPage<Props> = ({ seoData }) => {
	const { title, description, url } = seoData;
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta property='og:title' content={title} key='ogtitle' />
				<meta property='og:url' content={url} key='ogurl' />
				<meta name='description' content={description} />
				<meta property='og:title' content={title} key='ogtitle' />
				<meta
					property='og:description'
					content={description}
					key='ogdesc'
				/>
			</Head>
			<div style={{ height: '100vh' }}>
				<iframe
					src='https://acc-fuel-calculator-f55cb.web.app/#/'
					width='100%'
					height='100%'
					frameBorder='0'
				/>
			</div>
		</Fragment>
	);
};

export default FuelCalculator;

export const getStaticProps = async () => {
	return {
		props: {
			seoData,
		},
	};
};
