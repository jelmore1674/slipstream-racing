const imgPath =
	'https://jelmoreassets.nyc3.cdn.digitaloceanspaces.com/SlipstreamRacing/';

export const data = {
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
	src: `${imgPath}favicon.png`,
};
