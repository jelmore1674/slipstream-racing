import React, { ReactChildren, ReactElement } from 'react';
import { Nav } from '../components';
import { Footer } from '../components/Footer/footer';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Nav />
			<main style={{ minHeight: 'calc(100vh - 80px)' }}>{children}</main>
			<Footer />
		</>
	);
};
