import React, { ReactChildren, ReactElement } from 'react';
import { Footer, Nav } from 'components/Sections';
import NavContext from 'context/nav-context';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
	const { setMobileDropdown } = React.useContext(NavContext);

	return (
		<>
			<Nav />
			<main
				style={{ minHeight: 'calc(100vh - 80px)' }}
				onClick={() => setMobileDropdown(false)}>
				{children}
			</main>
			<Footer />
		</>
	);
};
