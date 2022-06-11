import React, { Fragment } from 'react';
import { PageHeading } from 'components/Elements';
import { PDFViewer } from 'components/Sections';

const LeagueRules = () => {
	return (
		<Fragment>
			<PageHeading>League Rules</PageHeading>
			<PDFViewer pdf='/assets/rules.pdf' />
		</Fragment>
	);
};

export default LeagueRules;
