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
			href: '/driver-resources',
			subMenu: [
				{
					name: 'ACC Custom Liveries',
					href: '/driver-resources/acc-liveries',
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
