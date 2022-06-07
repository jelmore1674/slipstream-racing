import React, { Fragment } from 'react';
import { PDFViewer } from '@components';
import { PageHeading } from 'components/Elements';

const LeagueRules = () => {
	return (
		<Fragment>
			<PageHeading>League Rules</PageHeading>
			<PDFViewer pdf='/assets/rules.pdf' />
		</Fragment>
	);
};

export default LeagueRules;
