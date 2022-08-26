import { NAV_DATA } from '@data';
import styled from '@emotion/styled';
import NavContext from 'context/nav-context';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavList } from '../Blocks/NavList';
import { NavLogo } from '../Elements/NavLogo';
import { useScroll } from '@hooks';
import { ThemeProps } from '@types';

const NavWrapper = styled.nav<{ theme?: ThemeProps; show?: boolean }>((p) => {
	const { show } = p;
	return {
		backgroundColor: p.theme.colors.primary,
		display: 'flex',
		justifyContent: 'center',
		padding: '0.5rem 2rem',
		position: 'sticky',
		top: 0,
		transition: 'transform 360ms linear',
		width: '100vw',
		zIndex: '100',
		'@media(max-width: 1220px)': {
			transform: `translate(0, ${show ? '0' : '-90'}px)`,
		},
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
	const showScroll = useScroll();

	return (
		<NavWrapper show={showScroll}>
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
