import styled from '@emotion/styled';
import React from 'react';

const FooterWrapper = styled.footer({
	display: 'flex',
	flex: 1,
	padding: '2rem 0',
	borderTop: '1px solid #eaeaea',
	justifyContent: 'center',
	alignItems: 'center',
});

export const Footer = () => {
	return (
		<FooterWrapper>
			<p>
				Made with{' '}
				<span role='img' aria-label='love'>
					❤️
				</span>
			</p>
		</FooterWrapper>
	);
};
