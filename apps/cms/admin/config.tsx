// admin/config.tsx
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';

function CustomLogo() {
	return (
		<a
			href='https://slipstreamracing.net'
			target='_blank'
			css={{
				width: '100%',
				maxHeight: '100%',
				display: 'flex',
				alignItems: 'center',
				gap: '24px',
				textDecoration: 'none',
				color: 'inherit',
				'&:hover': {
					color: '#bd3039',
				},
			}}>
			<img
				css={{ width: '60px', height: '60px' }}
				src='https://assets.slipstreamracing.net/SlipstreamRacing/favicon.png'
				alt='logo'
			/>
			<h3>Slipstream Racing Admin</h3>
		</a>
	);
}

export const components = {
	Logo: CustomLogo,
};
