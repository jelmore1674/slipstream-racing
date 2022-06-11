import styled from '@emotion/styled';
import React from 'react';
import { NavList } from '../Blocks/NavList';
import { NavLogo } from '../Elements/NavLogo';
import { NAV_DATA } from '@data';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavContext from 'context/nav-context';

const NavWrapper = styled.nav((p: any) => {
	return {
		backgroundColor: p.theme.colors.primary,
		display: 'flex',
		justifyContent: 'center',
		padding: '0.5rem 2rem',
		position: 'fixed',
		top: 0,
		width: '100vw',
		zIndex: '100',
	};
});

const NavContainer = styled.div({
	display: 'flex',
	justifyContent: 'space-between',
	width: '1400px',
});

const IconWrapper = styled.div({
	alignItems: 'center',
	display: 'flex',
	'@media(min-width: 1220px)': {
		display: 'none',
	},
});

export const Nav = () => {
	const { navItems, src } = NAV_DATA;
	const { mobileDropdown, setMobileDropdown } = React.useContext(NavContext);

	return (
		<NavWrapper>
			<NavContainer>
				<NavLogo src={src} />
				<IconWrapper>
					{mobileDropdown ? (
						<FaTimes
							style={{ cursor: 'pointer' }}
							size={'3rem'}
							onClick={() => setMobileDropdown(!mobileDropdown)}
						/>
					) : (
						<FaBars
							style={{ cursor: 'pointer' }}
							size={'3rem'}
							onClick={() => setMobileDropdown(!mobileDropdown)}
						/>
					)}
				</IconWrapper>
				<NavList navItems={navItems} />
			</NavContainer>
			{mobileDropdown && <NavList navItems={navItems} mobile />}
		</NavWrapper>
	);
};
