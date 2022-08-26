import { PageHeading } from 'components/Elements';
import { PDFViewer } from 'components/Sections';
import Head from 'next/head';
import React, { Fragment } from 'react';

const LeagueRules = () => {
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default LeagueRules;
