import { PageHeading, PDFViewer } from '@components';
import Head from 'next/head';
import React from 'react';

const LeagueRules = () => {
	return (
		<>
			<Head>
				<title>League Rules | Slipstream Racing</title>
				<meta
					property='og:title'
					content='League Rules | Slipstream Racing'
					key='ogtitle'
				/>
			</Head>
			<PageHeading>League Rules</PageHeading>
			<PDFViewer pdf='/assets/rules.pdf' />
		</>
	);
};

export default LeagueRules;
