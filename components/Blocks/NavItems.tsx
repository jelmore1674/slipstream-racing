import { SIMRACINGGP_URL } from '@data';
import styled from '@emotion/styled';
import { ThemeProps } from '@types';
import NavContext from 'context/nav-context';
import { openInNewTab } from 'lib/helperFunctions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const NavItemWrapper = styled.a<{
	active?: boolean;
	signUp?: boolean;
	theme?: ThemeProps;
}>((p) => {
	const { active, signUp } = p;
	return {
		backgroundColor: signUp ? '#fff' : '',
		border: `2px solid ${active ? '#fff' : 'transparent'}`,
		borderRadius: signUp ? '4px' : '',
		color: signUp ? p.theme.colors.primary : '#fff',
		cursor: 'pointer',
		display: 'flex',
		gap: '0.5rem',
		justifyContent: 'center',
		padding: '0.5rem 1rem',
		position: 'relative',
		transition: 'all 0.3s ease-in-out',
		'&:hover': {
			backgroundColor: signUp ? '#ffffff49' : '',
			border: '2px solid white',
			color: signUp ? p.theme.colors.secondary : '#ffffff99',
		},
		'@media(max-width: 1220px)': {
			border: '2px solid transparent',
			borderRadius: '0',
			justifyContent: signUp ? 'center' : 'flex-start',
			width: '100%',
			'&:hover': {
				backgroundColor: signUp ? 'white' : '',
				border: '2px solid transparent',
				color: signUp ? p.theme.colors.primary : 'white',
			},
		},
	};
});

const Dropdown = styled.div<{ theme?: ThemeProps; mobile?: boolean }>((p) => {
	const { mobile } = p;
	return {
		backgroundColor: p.theme.colors.primary,
		border: '2px solid transparent',
		borderRadius: '4px',
		boxShadow: '0 0 4px rgba(0,0,0,0.2)',
		display: mobile ? 'none' : 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '0',
		paddingBottom: '1rem',
		paddingTop: '20px',
		position: 'absolute',
		textAlign: 'start',
		transition: 'all 0.3s ease-in-out',
		'@media(max-width: 1220px)': {
			boxShadow: 'none',
			display: mobile ? 'flex' : 'none',
			padding: '1rem 2rem',
			position: 'static',
			width: '100%',
		},
	};
});

const DropdownItem = styled.a<{ theme?: ThemeProps }>((p) => {
	return {
		cursor: 'pointer',
		margin: '0',
		padding: '0.5rem 1rem',
		position: 'relative',
		transition: 'border 0.4s ease-in-out',
		'&:hover': {
			backgroundColor: p.theme.colors.secondary,
			color: p.theme.colors.primary,
		},
		'@media(max-width: 1220px)': {
			border: '2px solid transparent',
			justifySelf: 'flex-start',
			width: '100%',
			'&:hover': {
				backgroundColor: 'inherit',
				color: 'inherit',
			},
		},
	};
});

interface INavItem {
	name: string;
	href?: string;
	subMenu?: INavItem[];
}

interface Props {
	href?: string;
	name: string;
	subMenu?: INavItem[];
	signUp?: boolean;
}

export const NavItem = ({
	href,
	subMenu,
	name,
	signUp,
}: Props): JSX.Element => {
	const { dropdown, dropdownItem, setMobileDropdown } =
		React.useContext(NavContext);
	const router = useRouter();

	const handleSignUp = (): void => {
		setMobileDropdown(false);
		if (href === SIMRACINGGP_URL) {
			openInNewTab(href);
		}
	};

	return (
		<>
			{href ? (
				<Link href={href}>
					<NavItemWrapper
						onClick={handleSignUp}
						active={
							href === router.pathname ||
							subMenu?.some(
								(item) => item.href === router.pathname
							)
						}
						signUp={signUp}>
						{name} {subMenu && <FaAngleDown />}
					</NavItemWrapper>
				</Link>
			) : (
				<NavItemWrapper
					onClick={handleSignUp}
					active={
						href === router.pathname ||
						subMenu?.some((item) => item.href === router.pathname)
					}
					signUp={signUp}>
					{name} {subMenu && <FaAngleDown />}
				</NavItemWrapper>
			)}
			{dropdown && subMenu === dropdownItem?.subMenu && (
				<Dropdown>
					{subMenu!.map((subItem: INavItem, i: number) => (
						<Link href={subItem.href!} key={i}>
							<DropdownItem>{subItem.name}</DropdownItem>
						</Link>
					))}
				</Dropdown>
			)}
			{subMenu && (
				<Dropdown mobile>
					{subMenu.map((subItem: INavItem, i: number) => (
						<Link href={subItem.href!} key={i}>
							<DropdownItem
								onClick={() => setMobileDropdown(false)}>
								{subItem.name}
							</DropdownItem>
						</Link>
					))}
				</Dropdown>
			)}
		</>
	);
};
