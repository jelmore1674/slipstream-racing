import { CDN } from './data';
// NavData
export const NAV_DATA = {
	navItems: [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'League Rules',
			href: '/league-rules',
		},
		{
			name: 'Driver Resources',
			subMenu: [
				{
					name: 'ACC Custom Liveries',
					href: '/driver-resources/acc-liveries',
				},
				{
					name: 'ACC Engine Map Guide',
					href: '/assetto-corsa-competizione-engine-map-guide',
				},
				{
					name: 'Fuel Calculator',
					href: '/driver-resources/fuel-calculator',
				},
			],
		},
	],
	src: `${CDN}/favicon.png`,
};
