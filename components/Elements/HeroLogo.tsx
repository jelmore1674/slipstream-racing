import { CDN } from '@data';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

const LogoContainer = styled.div({
	maxWidth: '1400px',
	width: '100%',
	position: 'relative',
	margin: 'auto',
});

const Logo = styled.div({
	position: 'absolute',
	top: '10px',
	right: '2rem',
	'@media (min-width: 1460px)': {
		right: '-2rem',
	},
	'@media (max-width: 768px)': {
		padding: '3rem',
		position: 'static',
	},
	'@media (max-width: 480px)': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const logoPath = `${CDN}/home/logo.png`;

export const HeroLogo = () => {
	return (
		<LogoContainer>
			<Logo>
				<Image src={logoPath} alt='logo' height={432} width={768} />
			</Logo>
		</LogoContainer>
	);
};
