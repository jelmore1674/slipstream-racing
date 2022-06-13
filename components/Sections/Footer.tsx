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
				2022 Slipstream Racing
				<sup style={{ fontSize: '0.5rem' }}>TM</sup>
			</p>
		</FooterWrapper>
	);
};
