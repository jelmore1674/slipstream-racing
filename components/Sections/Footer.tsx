import styled from '@emotion/styled';
import React from 'react';

const FooterWrapper = styled.footer({
	backgroundColor: '#1a1a1a',
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
				Slipstream Racing<sup style={{ fontSize: '0.5rem' }}>TM</sup>{' '}
				{new Date().getFullYear()}
			</p>
		</FooterWrapper>
	);
};
