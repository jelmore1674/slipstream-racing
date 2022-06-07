import React, { createContext } from 'react';

interface NavItem {
	name: string;
	href: string;
	subMenu?: NavItem[];
}

interface NavContextInterface {
	dropdown: boolean;
	dropdownItem: NavItem;
	mobileDropdown: boolean;
	setDropdown: (value: boolean) => void;
	setDropdownItem: (value: NavItem) => void;
	setMobileDropdown: (value: boolean) => void;
}

const NavContext = createContext({} as NavContextInterface);

export const NavContextProvider = ({ children }: any) => {
	const [dropdown, setDropdown] = React.useState(false);
	const [dropdownItem, setDropdownItem] = React.useState({} as NavItem);
	const [mobileDropdown, setMobileDropdown] = React.useState(false);

	const context = {
		dropdown,
		dropdownItem,
		setDropdown,
		setDropdownItem,
		mobileDropdown,
		setMobileDropdown,
	};

	return (
		<NavContext.Provider value={context}>{children}</NavContext.Provider>
	);
};

export default NavContext;
