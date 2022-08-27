import { SIMRACINGGP_URL } from '@data';
import styled from '@emotion/styled';
import { ThemeProps } from '@types';
import NavContext from 'context/nav-context';
import React from 'react';
import { NavItem } from './NavItems';

const NavListWrapper = styled.div<{ theme?: ThemeProps; mobile?: boolean }>(
	(p) => {
		const { mobile } = p;
		return {
			alignItems: 'center',
			display: mobile ? 'none' : 'flex',
			gap: '1.5rem',
			justifyContent: 'center',
			'@media(max-width: 1220px)': {
				backgroundColor: mobile ? p.theme.colors.primary : '',
				display: mobile ? 'block' : 'none',
				position: mobile ? 'absolute' : 'relative',
				top: mobile ? '80px' : '',
				width: mobile ? '100%' : '',
			},
			'@media(max-width: 768px)': {
				top: mobile ? '77px' : '',
			},
		};
	}
);

const NavItemsWrapper = styled.div({
	'@media(max-width: 768px)': {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
});

interface INavItem {
	name: string;
	href?: string;
	subMenu?: INavItem[];
}

interface Props {
	navItems: INavItem[];
	mobile?: boolean;
}

export const NavList = ({ navItems, mobile }: Props): JSX.Element => {
	const { setDropdown, setDropdownItem } = React.useContext(NavContext);

	const handleMouseOver = (item: INavItem) => {
		setDropdown(true);
		setDropdownItem(item);
	};

	return (
		<NavListWrapper mobile={mobile}>
			{navItems.map(({ href, name, subMenu }, i) => (
				<NavItemsWrapper
					key={i}
					onMouseEnter={() => subMenu && handleMouseOver(navItems[i])}
					onMouseLeave={() => subMenu && setDropdown(false)}>
					<NavItem href={href} name={name} subMenu={subMenu} />
				</NavItemsWrapper>
			))}
			<NavItem href={SIMRACINGGP_URL} name='Sign Up' signUp />
		</NavListWrapper>
	);
};
